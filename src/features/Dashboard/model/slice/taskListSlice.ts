import { createSlice } from '@reduxjs/toolkit';
import { DashboardSchema } from '../types/schema';
import { getTestTasks } from '../servises/getTestTasks';
import { searchTasks } from '../servises/searchTasks';

const initialState: DashboardSchema = {
    data: undefined,
    isLoading: false,
    error: ''
};

export const taskListSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateData: (state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTestTasks.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getTestTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload
            })
            .addCase(getTestTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(searchTasks.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(searchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload
            })
            .addCase(searchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const { actions: TaskListActions } = taskListSlice;
export const { reducer: TaskListReducer } = taskListSlice;
