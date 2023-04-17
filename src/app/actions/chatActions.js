import axios from "axios";
import { actionsType } from "../constans/actionstype";



export const getDataStart = () => ({
    type: actionsType.GET_DATA_START,
    payload: true
})

export const getAnswer = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return {
        type: actionsType.GET_ANSWER, payload: res.data
    }
}

export const getAnswer1 = () =>
    async function fetcData(dispatch) {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
        dispatch({
            type: actionsType.GET_ANSWER,
            payload: res.data
        })
    }
