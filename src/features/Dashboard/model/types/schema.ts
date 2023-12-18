export type DashboardSchema = {
    data?: TestType[],
    isLoading: boolean,
    error?: string
}
export type Statuses = 'ONLINE' | 'PAUSED' | 'STOPPED' | 'DRAFT';
type TestTypes = 'MVT' | 'CLASSIC' | 'SERVER_SIDE'

export type TestType = {
    id: number,
    name: string,
    type: TestTypes,
    status: Statuses
    siteId: number
    sites: SiteType
}
export type SiteType = {
    id: number,
    url: string
}