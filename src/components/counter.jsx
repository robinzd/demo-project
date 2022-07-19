import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tags: ["robin", "tag2", "tag3"],
  };

  incrementhandle = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementhandle = () => {
    this.setState({counter:this.state.counter - 1});
  }

  render() {
    return (
      <div className="container">
        <button
          onClick={this.incrementhandle}
          type="button"
          className="btn btn-success"
        >
        +
        </button>
        <span className={this.getbadgesclasses()}>{this.formatCount()}</span>
        <button
          onClick={this.decrementhandle}
          type="button"
          className="btn btn-danger"
        >
         -
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getbadgesclasses() {
    let classes;
    if (this.state.counter == 0) {
      classes = "badge bg-danger m-2";
    } 
    else if(this.state.counter < 0){
      classes = "badge bg-danger m-2";
    }
    else {
      classes = "badge bg-info text-dark m-2";
    }
    return classes;
  }

  formatCount() {
    const { counter } = this.state;
    if (counter == 0) {
      return "Zero";
    }
    else if(counter < 0){
      return "Zero";
    }
     else {
      return counter;
    }
  }
}

export default Counter;
