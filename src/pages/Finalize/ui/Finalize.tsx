import { useNavigate, useParams } from 'react-router-dom';
import './Finalize.scss'
import BackButton from '../../../shared/ui/BackButton/BackButton';

const Finalize = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/dashboard/')
    }
    const id = useParams<{ id: string }>()
    return (
        <>
            <div className="finalize-header">
                Finalize
            </div>
            <div className='secondary-text'>
                Spring promotion {id.id as string}
            </div>
            <BackButton clickHandler={clickHandler} />
        </>
    );
};

export default Finalize;