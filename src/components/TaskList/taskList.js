 /* eslint-disable */
import Task from '../Task/task'
import PropTypes from 'prop-types';

TaskList.defaultProps = {
    todos: () => {},
    onToggleDone: () => {},
};

TaskList.PropTypes = {
    todos: PropTypes.func,
    onToggleDone: PropTypes.func,
    onDeleted: PropTypes.func,
    status: PropTypes.string

};



function TaskList({todos, onDeleted, onToggleDone, status}) {

    
    
    const elements = todos.filter(item => {
        if (status === 'all') {
            return item
        }
        if (status === 'active') {
            return !item.done
        }
        if (status === 'completed') {
            return item.done
        } else {
            return todos
        }

    }).map((item) => {
        return (
            <Task
            key={item.id} {...item}
            onDeleted ={()=> onDeleted(item.id)}
            onToggleDone ={()=> onToggleDone(item.id)}/>
        )

    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );

    
    
}



export default TaskList;