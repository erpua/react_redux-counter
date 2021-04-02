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

// import { createStore } from 'redux';

// const initialState = { counterValue: 10 };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         counterValue: state.counterValue + payload,
//       };

//     case 'counter/Decrement':
//       return {
//         counterValue: state.counterValue - payload,
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export default store;

/* -------------------------- */

/* import { createStore } from 'redux';

const initialState = {
  counter: {
    value: 10,
    step: 15,
  },
  user: {},
  todos: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        ...state, //to spread previous => const initialState = {
        //   counter: { value: 10 },
        //   user: {},
        //   todos: {},
        // };
        //then to work with what we need
        counter: {
          ...state.counter, //to spread all counter to save step and others
          value: state.counter.value + payload, //to update value
        },
      };

    case 'counter/Decrement':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store; */

/* -------------------- */

/* import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  counter: {
    value: 10,
    step: 15,
  },
  user: {},
  todos: {},
};

const counterInitialState = {
  value: 10,
  step: 15,
};

const counterReducer = (state = counterInitialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        ...state,
        value: state.value + payload,
      };

    case 'counter/Decrement':
      return {
        ...state,
        value: state.value - payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

// reducer composition
const store = createStore(rootReducer, composeWithDevTools());

export default store; */

/* ------------------- */

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return state + payload;

//     case 'counter/Decrement':
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// /* {
//    counter: //for counter reports counterReducer
//   {
//   value: 5, //for value reports valueReducer
//   step: 10, // for step reports stepReducer
// }
// }
//  */

/* ------------------- */

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
