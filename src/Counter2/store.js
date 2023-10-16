import { createStore } from "redux"

const initialState = {
    count: 0
}

export const actionsTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.INCREMENT: return {
            count: state.count + 1
        }
        case actionsTypes.DECREMENT: return {
            count: state.count - 1
        }
        default: return state 
    }
}

export const store = createStore(reducer);
