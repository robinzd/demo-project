import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 8 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleincrement = () => {
    alert("hai");
  }

handlereset = () =>{
    const counter = this.state.counters.map(c => {
        c.value=0;
        return c;
    });
    this.setState({counter})
};

counterdelete = (countersId) => {
    console.log(countersId);
   const counters =this.state.counters.filter(d => d.id !== countersId);
   console.log(counters);
  this.setState({counters});
  };

  render() {
    return (
        <div>
        <button
          onClick={this.handlereset}
          type="button"
          className="btn btn-primary m-2"
        >
        Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            counterdelete={this.counterdelete}
            onincrement={this.handleincrement}
          >
        </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
