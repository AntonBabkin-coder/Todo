import Task from '../Task/task'

function TaskList() {
    return (
        <ul className="todo-list">
            <Task/>
            <Task/>
            <Task/>
        </ul>
    );
}

export default TaskList;