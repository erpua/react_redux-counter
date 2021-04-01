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

export const increment = value => ({
  type: 'counter/Increment', //name space
  payload: value,
});

export const decrement = value => ({
  type: 'counter/Decrement',
  payload: value,
});
