import { actionsTypes } from "../types";

const initialState = {
    count: 0,
};

export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionsTypes.INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case actionsTypes.DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
            };
        default:
            return state;
    }
};

export const incrementCount = (payload: number) => ({
    type: actionsTypes.INCREMENT,
    payload: payload,
});
export const decrementCount = (payload: number) => ({
    type: actionsTypes.DECREMENT,
    payload: payload,
});
