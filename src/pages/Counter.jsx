import React from 'react'
import './counter.css';
import {useDispatch, useSelector} from 'react-redux';
import { AddAction, MinusAction } from './Store/Action/Action.jsx';


const Counter = () => {

    const dispatch = useDispatch();
    const selector = useSelector((state) => state.addCounterReducer)

    const addCounter =()=>{
        dispatch(AddAction());
    }

    const minusCounter = () =>{
        dispatch(MinusAction());
    }
  return (
    <>
      <div className="container-fluid count-container vh-100">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-5 bg-dark shadow rounded">
                <div className="heading text-white mt-3">
                    <h2>Counter App</h2>
                <hr />
                </div>
                <div className="d-flex gap-3 justify-content-center align-items-center mb-3">
                <div className="btn btn-secondary fs-3" onClick={minusCounter}>Decrement</div>
                <p className='text-white pt-3 fs-1'>{selector.globalCounter}</p>
                <div className="btn btn-secondary fs-3" onClick={addCounter}>Increment</div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default Counter