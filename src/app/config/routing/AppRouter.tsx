
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../shared/config/routeconfig';

const AppRouter = () => {
    return (
        <Suspense fallback=''>
            <Routes>
                {Object.values(routeConfig).map(route => (
                    <Route
                        key={route.path}
                        element={
                            <div className='page-wrapper'>{route.element}</div>}
                        path={route.path} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;