import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // tags: ["robin", "tag2", "tag3"],
  // };

  // incrementhandle = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // decrementhandle = () => {
  //   this.setState({counter:this.state.counter - 1});
  // }


  render() {
  return (
      <div className="container">
        <h4>Id No:{this.props.counter.id}</h4>
       <span className={this.getbadgesclasses()}>{this.formatCount()}</span>
        {/* <button
          onClick={this.decrementhandle}
          type="button"
          className="btn btn-danger"
        >
         -
        </button> */}
         <button
          onClick={() =>this.props.onincrement(this.props.counter)}
          type="button"
          className="btn btn-success"
        >
        Increment
        </button>
        <button
         type="button"
          onClick={() =>this.props.counterdelete(this.props.counter.id)} className="btn btn-danger m-2"
        >
       Delete
        </button>

        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getbadgesclasses() {
    let classes;
    if (this.props.counter.value == 0) {
      classes = "badge bg-danger m-2";
    } 
    else if(this.props.counter.value  <= 0){
      classes = "badge bg-danger m-2";
    }
    else {
      classes = "badge bg-info text-dark m-2";
    }
    return classes;
  }

  formatCount() {
    const { value: counter } = this.props.counter;
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
