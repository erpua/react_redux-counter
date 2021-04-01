import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'modern-normalize/modern-normalize.css';

import store from './redux/store';
/*import { myAction, myAction2 } from './redux/actions'; */

/*
console.log('store =>', store);
console.log('store.getState =>', store.getState()); */
/* console.log('my ACTION =>', myAction); */
/* console.log('store.dispatch(myAction) =>', store.dispatch(myAction)); */

/* store.dispatch(myAction);
store.dispatch(myAction2); */

/* store.dispatch(myAction(5));
store.dispatch(myAction(10));
store.dispatch(myAction2); */

//<Provider /> component, that wraps ALL our
// application and, throuth context, passes additional
//functionality

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
