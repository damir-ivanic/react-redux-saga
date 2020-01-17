import { TEST } from "../constants"

const initialState = {
    test: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return { ...state, test: "test updateovan" }
        default:
            return { ...state }
    }
}