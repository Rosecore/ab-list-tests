import React from 'react';
import { Navigate } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <Navigate to="/dashboard" replace={true} />
        </div>
    );
};

export default MainPage;