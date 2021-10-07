import React, {Component} from 'react';
import './App.css';
import TaskList from './components/TaskList/taskList'
import NewTaskForm from './components/NewTaskForm/newTaskForm'
import Footer from './components/Footer/footer'


 export default class App extends Component {
   maxId = 100
  
  state = {
    todoData: [
      this.createTodoItem("Completed task"),
      this.createTodoItem("Editing task"),
      this.createTodoItem("Active task")
     
    ]
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      id: this.maxId++,
      status: 'all',
      time: Date.now()
    }
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    
    
    
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr
      }
    })
    
  }

  todoFilter = (status) => {
    this.setState ( {
      status: status
      

       
    })
    
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done}

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }

  deletedItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }

    });
  }

  clearCompleted = () => {
    this.setState(({todoData}) => {
      const completed = todoData.filter((el) => !el.done);
             
      return {
        todoData: completed
      }
      
    });
    
  }
 
   
  
  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

        
   
    
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem}/>
        </header>
        <section className="main">
          <TaskList
           todos={this.state.todoData}
           onDeleted={this.deletedItem}
           onToggleDone={this.onToggleDone}
           status={this.state.status}/>
           
          <Footer 
            todoCount={todoCount}
            todoFilter={this.todoFilter}
            clearCompleted={this.clearCompleted}
            
            />
        </section>
      </section>
    );
  }
}

  

  
  
      
      
   

// export default App;
