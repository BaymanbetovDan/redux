import { Dispatch } from "redux"
import { TodoAction, TodoActionsTypes } from "../../types/todo"
import axios from "axios"


export const fethcTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionsTypes.FETCH_TODOS })
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit }
            })
            setTimeout(() => {
                dispatch({
                    type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
                    payload: res.data
                })
            }, 500)
        } catch (error) {
            dispatch({
                type: TodoActionsTypes.FETCH_TODOS_ERROR,
                payload: "Error"
            })
        }
    }
}

export function SetTodoPage(page: number): TodoAction {
    return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page}
}