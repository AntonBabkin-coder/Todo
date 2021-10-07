import React, {Component} from 'react'
import TasksFilter from '../TasksFilter/tasksFilter'
import './footer.css'
import PropTypes from 'prop-types';

export default class Footer extends Component {

    static defaultProps = {
        todoCount: () => {},
        todoFilter: () => {},
        clearCompleted: () => {}
    };

    static propTypes = {
        todoCount: PropTypes.func,
        todoFilter: PropTypes.func,
        clearCompleted: PropTypes.func,
        status: PropTypes.string
    }

    render() {
        const {todoCount, todoFilter, status, clearCompleted} = this.props;
        
        return (
            <footer className="footer">
                <span className="todo-count">{todoCount} items left</span>
                
                <TasksFilter
                 todoFilter = {todoFilter}
                 status={status}/>
                <button 
                className="clear-completed"
                onClick={clearCompleted}>Clear completed</button>
            </footer>
        )
    }
}

