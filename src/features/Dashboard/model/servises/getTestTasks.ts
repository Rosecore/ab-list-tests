import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { TestType } from "../types/schema"


export const getTestTasks = createAsyncThunk<TestType[], void, { rejectValue: string }>(
    'tasks/getTasks',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get<TestType[]>('http://localhost:3100/tests?_expand=sites')
            if (!resp) {
                console.log('asdasd')
            }
            resp.data.forEach(el => el.sites.url = el.sites.url.replace(/.*:\/\/(?:www\.|)/, ''))
            return resp.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Данные сломались")
        }
    }
)
