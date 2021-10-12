import React from 'react'
import './task.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types';


function Task ({ label, onDeleted, onToggleDone, done, time }) {
    
    Task.defaultProps = {
      onDeleted: () => {},
      onToggleDone: () => {},
      label: {},
      done: false,
      time: ''
      
    };

    Task.propTypes = {
      label: PropTypes.string,
      done: PropTypes.bool,
      time: PropTypes.number,
      onDeleted: PropTypes.func,
      onToggleDone: PropTypes.func,
      
    }
  
    
      
      
     
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
                <button type='button' label='edit' className="icon icon-edit" />
                <button type='button' label='destroy' className="icon icon-destroy" onClick = {onDeleted} />
              </div>
            </li>
      )
    
} 

export default Task;

