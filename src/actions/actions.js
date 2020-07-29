import {INCREMENT,DECREMENT} from './Types'

export const incrementAction= step =>{

    return{
        type:INCREMENT,
        payload: step
    }
}
export const decrementAction= step =>{

    return{
        type:DECREMENT,
        payload: step
    }
}