import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  state = {
    status: 'all',
    todoData: [],
  };

  addItem = (text, min, sec) => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData, this.createTodoItem(text, min, sec)];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  deletedItem = (id) => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((el) => el.id !== id);
      return {
        todoData: newArray,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((el) => !el.done);
      return {
        todoData: newArray,
      };
    });
  };

  todoFilter = (value) => {
    this.setState({
      status: value,
    });
  };

  createTodoItem(label, min, sec) {
    return {
      label,
      done: false,
      id: Math.floor(Math.random() * 10000),
      status: 'all',
      time: Date.now(),
      min: +min,
      sec: +sec,
    };
  }

  render() {
    const { todoData, status } = this.state;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todos={todoData}
            onDeleted={this.deletedItem}
            onToggleDone={this.onToggleDone}
            status={status}
            saveCgange={this.saveCgange}
            startTimer={this.startTimer}
          />
          <Footer
            todoCount={todoData.length - todoData.filter((el) => el.done).length}
            todoFilter={this.todoFilter}
            clearCompleted={this.clearCompleted}
            status={status}
          />
        </section>
      </section>
    );
  }
}
