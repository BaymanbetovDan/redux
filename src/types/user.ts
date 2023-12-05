export interface UserState {
    users: any;
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USER',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface FetchUserActions {
    type: UserActionTypes.FETCH_USERS;
}
export interface FetchSuccessUserActions {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}
export interface FetchErrorUserActions {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUserActions | FetchSuccessUserActions | FetchErrorUserActions

