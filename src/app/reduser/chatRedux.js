import { actionsType } from "../constans/actionstype";

const initialState = {
    data: [],
    isLoading: false
}

export const chatReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionsType.GET_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case actionsType.GET_ANSWER:
            return {
                ...state,
                data: payload,
                isLoading: false
            }
        default:
            return state
    }
}