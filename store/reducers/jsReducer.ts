import {IJsReducer} from "../types/IJsReducer";

const initialState: IJsReducer = {
    code: ""
}

type Action = | { type: string, payload?: string }

const jsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "SET_JS":

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

export default jsReducer;