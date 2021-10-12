import React from 'react'
import './taskFilter.css'
import PropTypes from 'prop-types';

function TasksFilter ({todoFilter, status}) {

  TasksFilter.defaultProps = {
    todoFilter: () => {},
    status: ''
  };

  TasksFilter.propTypes = {
    status: PropTypes.string,
    todoFilter: PropTypes.func
  }
  
 
    
      return (
          <ul className="filters">
              <li>
                <button type='button' label="all" onClick ={ () => todoFilter('all')}  className={status === '' ? 'selected' : ''} >All</button>
              </li>
              <li>
                <button type="button" label="active"  onClick ={ () => todoFilter('active')} className={status === 'active' ? 'selected' : ''} >Active</button>
              </li>
              <li>
                <button type="button" className={status === true ? 'selected' : ''} onClick ={ () => todoFilter('completed')}>Completed</button>
              </li>
          </ul>
      );
  }


 export default TasksFilter;