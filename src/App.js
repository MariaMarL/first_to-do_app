import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text:'Doctor appointment',
      day: 'Feb 5th at 2:30 pm',
      reminder: true,
    },
    {
      id:2,
      text:'Meeting at school',
      day: 'Feb 6th at 1:30 pm',
      reminder: true,
    },
    {
      id:3,
      text:'Food shopping',
      day: 'Feb 5th at 2:30 pm',
      reminder: false,
    }
  ]) 

  //delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  return (
    <div className="container">
      <Header/>
      {tasks.length>0 ? <Tasks  tasks={tasks} onDelete=
      {deleteTask}/>:'No tasks to show'}
    </div>
  );
}

export default App;