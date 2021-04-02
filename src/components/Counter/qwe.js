// /* import React from 'react'; */
// import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
// /* import styles from './Counter.module.css'; */
// import './Counter.css';

// /* class Counter extends React.Component */
// class Counter extends Component {
//   //old version

//   /*  constructor() {
//     super();

//     this.state = {
//       value: 0,
//     };
//   } */

//   //modern, which transpiled by babel

//   /*  state = {
//     value: 0,
//   }; */

//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = event => {
//     //arrow function ONLY, to avoid UNDEFINED of ' this '
//     console.log('Clicked INCREMENT');
//     console.log('this => ', this);
//     console.log('event => ', event);
//     console.log('event.type =>', event.type);

//     const { target } = event; //must be detructuring, cause after  function is being compiled => it removes from stack and setTimeout sees empty stack => undefined

//     setTimeout(() => {
//       console.log('event.target =>', target);
//     }, 1000);

//     /*  this.setState(
//       {
//         value: 10,
//       },
//       () => {}, //possibility to have callback ( calls after update  )
//     ); */

//     this.setState(prevState => {
//       return { value: prevState.value + 3 };
//     });
//   };

//   handleDecrement = () => {
//     //arrow function ONLY, to avoid UNDEFINED of ' this '
//     console.log('Clicked DECREMENT');
//     console.log('this => ', this);

//     this.setState(prevState => ({
//       value: prevState.value - 3,
//     }));
//   };

//   render() {
//     /*   <div className="Counter">
//         <h2>Counter component</h2>
//         <span className="Counter__value">{this.state.value}</span>

//         <div className="Counter__controls">
//           <button type="button" onClick={this.handleIncrement}>
//             Increase for 1
//           </button>
//           <button type="button" onClick={this.handleDecrement}>
//             Decrease for 1
//           </button>
//         </div>
//       </div> */
//     /*  <div className={styles.Counter}>
//         <span className={styles.Counter__value}>0</span>

//         <div className={styles.Counter__controls}>
//           <button type="button" onClick={this.handleIncrement}>
//             Increase for 1
//           </button>
//           <button type="button">Decrease for 1</button>
//         </div>
//       </div> */
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;

/* --------------------- */
/* import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(({ value }) => ({
      value: value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(({ value }) => ({
      value: value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter; */

/* --------------------- */

import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/actions';
import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

/* to map redux's state into componentes props */
/* that is the first argument en connect(mapStateToProps) */
/* const mapStateToProps = state => {
  return {
    value: state.counterValue,
  };
}; */

/* ------------ */

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

//mapDispatchToProps => sends action
//second argument in connect()
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.decrement(5)),
  };
};

//connect => method, that connects React Component with REDUX
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//  const a = x => y => x + y;
// OR
// const a = x => {
//   return y => {
//     return x + y;
//   };
// };

// a(2)(3);
