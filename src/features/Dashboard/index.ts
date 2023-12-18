import { TaskListReducer, TaskListActions } from "./model/slice/taskListSlice";
import { DashboardSchema } from "./model/types/schema";
import { getFullData } from "./model/selectors/dataSelectors";
import Dashboard from "./ui/Dashboard";
import { Statuses } from "./model/types/schema";

export { Dashboard, TaskListActions, TaskListReducer, getFullData }
export type { DashboardSchema }
export type {Statuses}