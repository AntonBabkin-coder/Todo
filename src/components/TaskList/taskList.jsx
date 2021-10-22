import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Task from '../Task/task'





export default class TaskList extends Component {
    
    static defaultProps = {
        todos: {},
        onToggleDone: () => {},
        onDeleted: () => {},
        status: 'all',
        
        redactingTask: () => {}
    };
    
    static propTypes = {
        todos:  PropTypes.arrayOf(PropTypes.object),
        onToggleDone: PropTypes.func,
        onDeleted: PropTypes.func,
        status: PropTypes.string,
        redactingTask: PropTypes.func
    };

    render() {

        const {todos, onDeleted, onToggleDone, status, redactingTask} = this.props;
    
        const elements = todos.filter(item => {
            if (status === 'all') {
                return item
            }
            if (status === 'active') {
                return !item.done
            }
            if (status === 'completed') {
                return item.done
            } 
                return todos
            

        }).map((item) => (
                <Task
                key={item.id} {...item}
                onDeleted ={()=> onDeleted(item.id)}
                onToggleDone ={()=> onToggleDone(item.id)}
                
                redactingTask={redactingTask}/>
            ))
        return (
            <ul className="todo-list">
                {elements}
            </ul>
        );

                
    }
}
TaskList.defaultProps = {
    todos: () => {},
    onToggleDone: () => {},
};





