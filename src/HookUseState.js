import React, { useState } from "react";
// import "./styles.css";

// default -> {} 식별 가능
//            키워드 붙으면 중괄호x         => 모듈을 가져옴
//            키워드가 없으면 중괄호 사용   =>

const HookUseState = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="HookUseState">
      <h1>HookUseState {item}</h1>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
};

export default HookUseState;


export const Page = () => {
  return (
    <div>
      <h1>Page</h1>
    </div>
  );
};


// Class Component
export class AppUgly extends React.Component {
  state = {
    item: 1
  };

  render() {
    const { item } = this.state;

    return (
      <div className="App">
        <h1>AppUgly {item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>decrement</button>
        <p>뭐가 다르지</p>
      </div>
    );
  }

  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1
      };
    });
  };
}

// export default AppUgly;
