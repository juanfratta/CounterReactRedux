import React from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

import "./styles.scss";

const initialState = {
  count: 0
};

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

const RESET = "RESET";

const incrementValue = () => ({
  type: INCREMENT
});

const decrementValue = () => ({
  type: DECREMENT
});

const reset = () => ({
  type: RESET
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1
    };
  }

  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }

  if (action.type === RESET) {
    return {
      count: 0
    };
  }
  return state;
};

const store = createStore(reducer);

const mapStatetoProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  incrementValue,
  decrementValue,
  reset
};

const App = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

function Counter(props) {
  const { count, incrementValue, decrementValue, reset } = props;
  return (
    <main className="Application">
      <section className="Counters">
        <div className="Counter">
          <p className="count">{count}</p>
          <section className="controls">
            <button onClick={incrementValue}>Increment</button>
            <button onClick={decrementValue}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </section>
        </div>
      </section>
    </main>
  );
}

const CounterContainer = connect(mapStatetoProps, mapDispatchToProps)(Counter);

export default App;
