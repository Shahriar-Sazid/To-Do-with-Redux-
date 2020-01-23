import React, { Component } from 'react';
import classes from './TodoApp.module.css';
import StatusBar from '../../components/StatusBar/StatusBar';
import TodoList from '../../components/TodoList/TodoList';
import TodoInput from '../../components/TodoInput/TodoInput';
import Title from '../../components/Title/Title';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className={classes.to_do_app}>
        <Title />
        <div className={classes.main}>
          <TodoInput
            onInput={this.props.onInput}
            itemCount={this.props.todoItems.length}
          />
          <TodoList
            items={this.props.todoItems}
            tickHandler={this.props.onTick}
            crossHandler={this.props.onCross}
            updateHandler={this.props.onUpdate}
            mode={this.props.mode}
          />
          <StatusBar
            incompleteCount={this.props.incompleteCount}
            itemCount={this.props.todoItems.length}
            clearCompleted={this.props.onClearCompleted}
            showAll={this.props.showAll}
            showActive={this.props.showActive}
            showCompleted={this.props.showCompleted}
            mode={this.props.mode}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoItems: state.todoItems,
    incompleteCount: state.incompleteCount,
    lastId: state.lastId,
    mode: state.mode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInput: item => dispatch({ type: 'ON_INPUT', value: item }),
    onTick: id => dispatch({ type: 'ON_TICK', value: id }),
    onCross: id => dispatch({ type: 'ON_CROSS', value: id }),
    onUpdate: (id, text) =>
      dispatch({ type: 'ON_UPDATE', payload: { id, text } }),
    onClearCompleted: () => dispatch({ type: 'ON_CLEAR_COMPLETED' }),
    showAll: () => dispatch({ type: 'SHOW_ALL' }),
    showActive: () => dispatch({ type: 'SHOW_ACTIVE' }),
    showCompleted: () => dispatch({ type: 'SHOW_COMPLETED' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
