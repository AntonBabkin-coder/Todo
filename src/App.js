import './App.css';
import TaskList from './components/TaskList/taskList'
import NewTaskForm from './components/NewTaskForm/newTaskForm'
import Footer from './components/Footer/footer'

function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm/>
      </header>
      <section className="main">
        <TaskList/>
        <Footer/>
      </section>
      
      
    </section>
  );
}

export default App;
