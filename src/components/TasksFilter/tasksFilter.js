import React, {Component} from 'react'
import './taskFilter.css'
import PropTypes from 'prop-types';

export default class TasksFilter extends Component {

  static defaultProps = {
    todoFilter: () => {}
    
  };

  static propTypes = {
    status: PropTypes.string
  }  
  render() {
    const {todoFilter, status} = this.props;
      return (
          <ul className="filters">
              <li>
                <button className={status === 'all' ? 'selected' : ''} onClick ={ () => todoFilter('all')}>All</button>
              </li>
              <li>
                <button className={status === 'active' ? 'selected' : ''} onClick ={ () => todoFilter('active')} >Active</button>
              </li>
              <li>
                <button className={status === 'completed' ? 'selected' : ''} onClick ={ () => todoFilter('completed')}>Completed</button>
              </li>
          </ul>
      );
  }
}

//export default TasksFilter;