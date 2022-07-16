import {IHtmlReducer} from "../types/IHtmlReducer";

const initialState: IHtmlReducer = {
    code: ""
}

type Action = | { type: string, payload?: string }

const htmlReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "SET_HTML":

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

export default htmlReducer;