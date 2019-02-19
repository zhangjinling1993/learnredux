import { Increment, Decrement } from './../constants/index'

export const increment = () => {
    return {
        type: Increment
    }
};

export const decrement = () => {
    return {
        type: Decrement
    }
};