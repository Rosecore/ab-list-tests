import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { TestType } from "../types/schema"


export const searchTasks = createAsyncThunk<TestType[], string, { rejectValue: string }>(
    'tasks/searchTasks',
    async (serchString, thunkAPI) => {
        try {
            const resp = await axios.get<TestType[]>(`http://localhost:3100/tests?_expand=sites&q=${serchString}`)
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
