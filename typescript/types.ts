export type APIResponse<TData, TError = null | string> = {
    data: TData,
    error: TError,
}