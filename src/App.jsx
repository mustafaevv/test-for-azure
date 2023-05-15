import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrementCount() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello by Class Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

export default Header;
