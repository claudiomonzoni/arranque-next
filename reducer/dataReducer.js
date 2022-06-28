import { GET_DATOS } from "./types";

export const dataReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "GET_DATOS":
            return {
                ...state,
                datos: payload
            }
                
        default:
            return state;
    }
}