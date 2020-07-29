import {createStore, applyMiddleware} from 'redux'
import giantReducer from '../Reducer'

const MyMiddleware = (store) => (next) => (action) =>{
    console.log(action)
    next(action)
    // if(store.getState().CounterReducer.counter < 10){
    //     next(action)
    // }else{
    //     return alert('Finish')
    // }
}

export default createStore(giantReducer, applyMiddleware(MyMiddleware))