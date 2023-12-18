import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TaskListReducer } from "../../../features/Dashboard"; 
import { DashboardSchema } from "../../../features/Dashboard";

export interface StateSchema {
    dashboard: DashboardSchema

}
const rootReducer = combineReducers({
    dashboard: TaskListReducer
})

export const store = configureStore({
    reducer:rootReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();