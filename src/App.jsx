import React, {Component} from 'react';
import './App.css';
import TaskList from './components/TaskList/taskList'
import NewTaskForm from './components/NewTaskForm/newTaskForm'
import Footer from './components/Footer/footer'


 export default class App extends Component {
   
  
  state = {
    status: '',
    
    
    todoData: []          
    
      
      
  };

  

  todoFilter = (value) => {
    this.setState ( {
      status: value
      

       
    })
    
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

  createTodoItem(label) {
    return {
      label,
      done: false,
      id: Math.floor(Math.random() * 10000),
      status: '',
      time: Date.now()
    }
  }

  
 
   
  
  render() {
    const {todoData, status} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

        
   console.log(todoData);
    
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem}/>
        </header>
        <section className="main">
          <TaskList
           todos={todoData}
           onDeleted={this.deletedItem}
           onToggleDone={this.onToggleDone}
           status={status}/>
           
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
