import React, { Component } from "react";

class BandInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({ type: "ADD_BAND", band: this.state.text });
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Add Band Member:{" "}
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
