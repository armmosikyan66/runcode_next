import {ICssReducer} from "../types/ICssReducer";

const initialState: ICssReducer = {
    code: ""
}

type Action = | { type: string, payload?: string }

const cssReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "SET_CSS":

            if (action.payload) {
                return {
                    ...state,
                    code: action.payload
                }
            }

            return {
                ...state
            }

        default:
            return {
                ...state
            }
    }
}

export default cssReducer;