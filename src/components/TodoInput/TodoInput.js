import React from 'react';
import classes from './TodoInput.module.css';

const todoInput = props => {
  const dropIconStyle = {
    margin: 10,
    opacity: 0.3,
    color: 'darkgray'
  };
  if (props.itemCount === 0) {
    dropIconStyle.opacity = 0;
  }
  return (
    <div className={classes.todo_input}>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (event.target.elements[0].value.trim() === '') return;

          const item = {
            text: event.target.elements[0].value
          };
          item.text = item.text.trim();
          props.onInput(item);
          event.target.elements[0].value = '';
        }}
      >
        <span style={dropIconStyle}>
          <i className="fas fa-chevron-down" />
        </span>
        <input
          style={{ margin: 10, border: 'none' }}
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
};

export default todoInput;
