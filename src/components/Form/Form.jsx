import React, { Component } from 'react';
import style from './Forum.module.css';
import { ReactComponent as SearchIcon } from '../../icon/search.svg';

class Form extends Component {
  state = { inputValue: '' };
  submitHandler = event => {
    event.preventDefault();
    if (this.state.inputValue !== '') {
      this.props.formHandler(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };
  inputChangeHandler = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <>
        <form className={style.form} onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Search film"
            value={this.state.inputValue}
            onChange={this.inputChangeHandler}
          />
          <button type="submit">
            <SearchIcon width="20px" height="30px" />
          </button>
        </form>
      </>
    );
  }
}

export default Form;
