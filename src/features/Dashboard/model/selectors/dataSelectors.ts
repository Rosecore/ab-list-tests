import { StateSchema } from "../../../../app/config"

export const getFullData = (state: StateSchema) => state?.dashboard?.data

export const getisLoading = (state: StateSchema) => state?.dashboard?.isLoading

export const getError = (state: StateSchema) => state?.dashboard?.error