import React from 'react';
import classes from './StatusBar.module.css';

const statusBar = props => {
  let showAllStyle;
  let showActiveStyle;
  let showCompletedStyle;

  if (props.mode === 'all') {
    showAllStyle = {
      border: '1px solid rgba(128, 128, 128, 0.226)',
      outline: 0,
      marginRight: 5
    };
    showActiveStyle = null;
    showCompletedStyle = null;
  } else if (props.mode === 'active') {
    showActiveStyle = {
      border: '1px solid rgba(128, 128, 128, 0.226)',
      outline: 0,
      marginRight: 5,
      marginLeft: 5
    };
    showAllStyle = null;
    showCompletedStyle = null;
  } else if (props.mode === 'completed') {
    showCompletedStyle = {
      border: '1px solid rgba(128, 128, 128, 0.226)',
      outline: 0,
      marginLeft: 5
    };
    showActiveStyle = null;
    showAllStyle = null;
  }

  const displayOrNot = {
    display: 'none'
  };

  const clearCompletedStyle = {
    display: 'none'
  };

  if (props.itemCount !== 0) {
    displayOrNot.display = 'block';
  }

  if (props.incompleteCount !== props.itemCount) {
    clearCompletedStyle.display = 'block';
  }

  return (
    <div style={displayOrNot} className={classes.status_bar}>
      <div className={[classes.card, classes.first].join(' ')} />
      <div className={[classes.card, classes.second].join(' ')} />
      <div className={[classes.card, classes.third].join(' ')}>
        <span className={classes.status_bar_content}>
          {props.incompleteCount} items left
        </span>
        <span className={classes.status_bar_content}>
          <button
            style={showAllStyle}
            onClick={props.showAll}
            className={classes.status_button}
          >
            All
          </button>
          <button
            style={showActiveStyle}
            onClick={props.showActive}
            className={classes.status_button}
          >
            Active
          </button>

          <button
            style={showCompletedStyle}
            onClick={props.showCompleted}
            className={classes.status_button}
          >
            Completed
          </button>
        </span>
        <span
          style={clearCompletedStyle}
          className={classes.status_bar_content}
        >
          <button
            className={[
              classes.status_button,
              classes.clear_completed_btn
            ].join(' ')}
            onClick={props.clearCompleted}
          >
            Clear completed
          </button>
        </span>
      </div>
    </div>
  );
};

export default statusBar;
