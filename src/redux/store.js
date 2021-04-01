/* import { createStore } from 'redux';


//state = {} => previous state
const reducer = (state = {}, action) => state;

const store = createStore(reducer);

export default store;
 */

/* import { createStore } from 'redux';

const reducer = (state = { a: 20, b: 25 }, action) => state;

const store = createStore(reducer, { a: 15 });

export default store; */

/* -------------------- */

/* import { createStore } from 'redux';

//action goes to store.js, but in reducer includes automatically
const reducer = (state = {}, action) => {
  console.log('action from the store: ', action);

  return state;
};

const store = createStore(reducer);

export default store; */

/* -------------------------- */

/* import { createStore } from 'redux';

const initialState = { counterValue: 0 };

const reducer = (state = initialState, action) => {
  //state here is previous
  switch (action.type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + 1,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store; */

/* --------------- */
/* 
import { createStore } from 'redux';

const initialState = { counterValue: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + action.payload,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store; */

/* ----------------- */

import { createStore } from 'redux';

const initialState = { counterValue: 10 };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + payload,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
