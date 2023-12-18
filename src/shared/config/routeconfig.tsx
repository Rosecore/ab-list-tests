import { RouteProps } from "react-router-dom"
import { DashboardPage } from "../../pages/Dashboard"
import { FinalizePage } from "../../pages/Finalize"
import { ResultPage } from "../../pages/Result"
import MainPage from "../../pages/MainPage/MainPage"

export enum AppRoutes {
    default = "default",
    dashboard = "dashboard",
    finalize = "finalize",
    result = "result",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.default]: '/',
    [AppRoutes.dashboard]: '/dashboard',
    [AppRoutes.finalize]: '/finalize/',
    [AppRoutes.result]: '/result/',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.default]: {
        path: RoutePath.default,
        element: <MainPage />
    },
    [AppRoutes.dashboard]: {
        path: RoutePath.dashboard,
        element: <DashboardPage />
    },
    [AppRoutes.finalize]: {
        path: RoutePath.finalize + ':id',
        element: <FinalizePage />
    },
    [AppRoutes.result]: {
        path: RoutePath.result + ':id',
        element: <ResultPage />
    },
}