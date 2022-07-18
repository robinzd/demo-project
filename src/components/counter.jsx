import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 20,
    tags: ["robin", "tag2", "tag3"],
  };
  render() {
    return (
      <div className="container">
        <span className={this.getbadgesclasses()}>{this.formatCount()}</span>
        <button type="button" class="btn btn-primary">
          Increment
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
    } else {
      classes = "badge bg-info text-dark m-2";
    }
    return classes;
  }

  formatCount() {
    const { counter } = this.state;
    if (counter == 0) {
      return "Zero";
    } else {
      return counter;
    }
  }
}

export default Counter;
