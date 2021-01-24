import React, { Component } from 'react';

class Form extends Component {
  state = { inputValue: '' };
  submitHandler = event => {
    event.preventDefault();
    this.props.formHandler(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  inputChangeHandler = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Search film"
            value={this.state.inputValue}
            onChange={this.inputChangeHandler}
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default Form;
