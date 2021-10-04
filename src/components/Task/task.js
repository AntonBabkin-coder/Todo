import React, { Component } from 'react'
import './task.css'

export default class Task extends Component {
  state = {
    completed: false
  }
  onLabelClick = () => {
    this.setState(({completed}) => {
      return {
        completed: !completed
      }
    })
  }
    render() {
      const {completed} = this.state;
      let changed = 'view';
      if (completed) {
        changed += ' completed'
      }
      return (
          <li className={changed}>
              <div className="view">
              
                <input className="toggle" type="checkbox" />
                <label>
                  <span className="description" onClick = {this.onLabelClick}>Hello</span>
                  <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
              </div>
            </li>
      )
    }
} 

//export default Task;