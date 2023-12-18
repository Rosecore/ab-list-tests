import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/config/store/store';
import Button from '../../../shared/ui/Button/Button';
import InputField from '../../../shared/ui/InputField/InputField';
import { StatusesEnum } from '../../taskList';
import TaskList from '../../taskList/ui/TaskList';
import { getFullData, getisLoading } from '../model/selectors/dataSelectors';
import { getTestTasks } from '../model/servises/getTestTasks';
import { searchTasks } from '../model/servises/searchTasks';
import { TaskListActions } from '../model/slice/taskListSlice';
import './Dashboard.scss';

const Dashboard = () => {
    const dispatch = useAppDispatch()
    const testData = useSelector(getFullData)
    const isLoading = useSelector(getisLoading)
    const [typeSort, setTypeSort] = useState<boolean>(false)
    const [statusSort, setStatusSort] = useState<boolean>(false)
    const [siteSort, setSiteSort] = useState<boolean>(false)
    useEffect(() => {
        dispatch(getTestTasks())
    }, [dispatch])

    const SortByType = useCallback(() => {
        setTypeSort(prev => !prev)
        let updatedData
        typeSort ?
            updatedData = testData?.map(el => el).sort((a, b) => a.type.localeCompare(b.type))
            :
            updatedData = testData?.map(el => el).sort((a, b) => b.type.localeCompare(a.type))
        dispatch(TaskListActions.updateData(updatedData))
    }, [dispatch, testData, typeSort])

    const SortByStatus = useCallback(() => {
        setStatusSort(prev => !prev)
        const statusOrder = Object.keys(StatusesEnum)
        let updatedData
        statusSort ?
            updatedData = testData?.map(el => el).sort((a, b) => 
                statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status))
            : updatedData = testData?.map(el => el).sort((a, b) => 
                statusOrder.indexOf(b.status) - statusOrder.indexOf(a.status))
        dispatch(TaskListActions.updateData(updatedData))
    }, [dispatch, testData, statusSort])

    const SortBySite = () => {
        setSiteSort(prev => !prev)
        let updatedData
        siteSort ?
            updatedData = testData?.map(el => el).sort((a, b) => a.sites.url.localeCompare(b.sites.url)) :
            updatedData = testData?.map(el => el).sort((a, b) => b.sites.url.localeCompare(a.sites.url))
        dispatch(TaskListActions.updateData(updatedData))
    }
    const searchTask = useCallback((searchString: string) => {
        dispatch(searchTasks(searchString))
    }, [dispatch])
    const refreshData = useCallback(()=>{
        dispatch(getTestTasks())
    },[dispatch])
    return (
        <div>
            <InputField plaseholder='What test are you looking for?' 
                onChange={searchTask} 
                additionalInfo={testData?.length} />
            {isLoading ? (<div className='loader-container'><div className='loader'>

            </div></div>) :
                testData?.length === 0 ?
                    <div className='nothing-found-page'>
                        Your search did not match any results.
                        <Button text='Reset' type='active' onCLick={refreshData}/>
                    </div> :
                    (
                        <TaskList
                            SortBySite={SortBySite}
                            SortByType={SortByType}
                            SortByStatus={SortByStatus}
                            typeSort={typeSort}
                            statusSort={statusSort}
                            siteSort={siteSort}
                            data={testData} />
                    )}

        </div>
    );
};

export default Dashboard;