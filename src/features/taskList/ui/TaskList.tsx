import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import chevron from '../../../shared/assets/chevron.svg';
import ListElement from '../../../shared/ui/ListElement/ListElement';
import { TestType } from '../../Dashboard/model/types/schema';
import { StatusesEnum, TestTypesEnum } from '../model/types/types';
import './TaskList.scss';

interface taskListProps {
    SortByType: () => void,
    SortByStatus: () => void,
    SortBySite: () => void,
    typeSort: boolean,
    statusSort: boolean,
    siteSort: boolean,
    data?: TestType[],
}

const TaskList = (props: taskListProps) => {
    const { SortByType, SortByStatus, SortBySite, typeSort, statusSort, siteSort, data } = props
    const navigate = useNavigate();
    const onClickFinalize = useCallback((id?: number) => {
        navigate("/finalize/" + id);
    }, [navigate])
    const onClickResult = useCallback((id?: number) => {
        navigate("/result/" + id);
    }, [navigate])
    return (
        <div className='task-list'>
            <div className='filter-container'>
                <div className='name'>NAME</div>
                <div onClick={() => SortByType()} className='filter-item type'>TYPE
                    {typeSort ?
                        <img src={chevron} alt='' />
                        : <></>}
                </div>
                <div onClick={() => SortByStatus()} className='filter-item status'>STATUS
                    {statusSort ?
                        <img src={chevron} alt='' />
                        : <></>}</div>
                <div onClick={() => SortBySite()} className='filter-item site'>SITE
                    {siteSort ?
                        <img src={chevron} alt='' />
                        : <></>}</div>
            </div>
            {data && data.map(el => {
                return (<ListElement color="red"
                    key={el.name}
                    taskName={el.name}
                    onClickResult={onClickResult}
                    onClickFinalize={onClickFinalize}
                    id={el.id}
                    type={TestTypesEnum[el.type]}
                    site={el.sites.url}
                    status={StatusesEnum[el.status]} />)
            })}

        </div>
    );
};

export default TaskList;