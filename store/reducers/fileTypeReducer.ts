const initialState = {
    type: "txt"
}

type Action = | {type: string, payload: string}

const htmlReducer = (state= initialState, action: Action) => {
    switch (action.type) {
        case "SET_TYPE":
            return {
                ...state,
                type: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default htmlReducer;