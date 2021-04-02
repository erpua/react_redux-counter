/* export const myAction = {
  type: 'MY_ACTION',
  payload: 'super payload',
};

export const myAction2 = {
  type: 'MY_ACTION',
  payload: 'super payload 2',
};
 */

// export const myAction = value => {
//   return {
//     type: 'MY_ACTION',
//     payload: value,
//   };
// };

// export const myAction2 = {
//   type: 'MY_ACTION',
//   payload: 'super payload 2',
// };

//this expression converts to object literal.
//without parentheses => is function's body => which doesn't have sense

/* export const myAction = value => ({
  type: 'MY_ACTION',
  payload: value,
});

export const myAction2 = {
  type: 'MY_ACTION',
  payload: 'super payload 2',
};
 */

/* -------------------- */

import actionTypes from './counter-types';

export const increment = value => ({
  type: actionTypes.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: actionTypes.DECREMENT,
  payload: value,
});
