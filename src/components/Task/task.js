import React, { Component } from 'react'
import './task.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types';


export default class Task extends Component {
    
    static defaultProps = {
      onDeleted: () => {},
      onToggleDone: () => {},
    };

    static propTypes = {
      label: PropTypes.object,
      done: PropTypes.bool,
      time: PropTypes.string,
      onDeleted: PropTypes.func,
      onToggleDone: PropTypes.func
    }
  
    render() {
      const { label, onDeleted, onToggleDone, done, time } = this.props;
      
     
      let changed = '';
      if (done) {
        changed += 'completed'
      }
           
      return (
          <li className={changed}>
              <div className="view">
              
                <input className="toggle" type="checkbox" defaultChecked={done === true ?  true : done === true} onClick = {onToggleDone} />
                <label>
                  <span className="description">{label}</span>
                  <span className="created">created {formatDistanceToNow(time, { includeSeconds: true })} ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick = {onDeleted}></button>
              </div>
            </li>
      )
    }
} 

