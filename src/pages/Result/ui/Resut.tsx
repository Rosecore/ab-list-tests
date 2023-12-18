import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Result.scss'
import BackButton from '../../../shared/ui/BackButton/BackButton';

const Resut = () => {
    const navigate = useNavigate();
    const clickHandler = useCallback(() => {
        navigate('/dashboard/')
    }, [navigate])
    const id = useParams<{ id: string }>()
    return (
        <>
            <div className="result-header">
                Result
            </div>
            <div className='secondary-text'>
                Spring promotion {id.id as string}
            </div>
            <BackButton clickHandler={clickHandler} />
        </>
    );
};

export default Resut;