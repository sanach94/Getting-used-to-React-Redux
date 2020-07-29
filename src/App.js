import React, { useState} from "react";
import "./App.css";
import { connect } from "react-redux";
import {incrementAction, decrementAction} from './actions/actions'


function App({allState,inCounter, decCounter}) {
  const [step, setStep] = useState(1)

  return (
    <div className="App">
      <div>
        <select value={step} onChange={e => setStep(+e.target.value)}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <button onClick={() => inCounter(step)} >+</button>
      <p>{allState.counter}</p>
      <button onClick={() => decCounter(step)} >-</button>
     
    </div>
  );
}
const mapStateToProps = state => {
  return {
    allState: state.CounterReducer
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    inCounter: (step)=> dispatch(incrementAction(step)),
    decCounter: (step)=> dispatch(decrementAction(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
