import './App.css';
import {useState, useEffect} from 'react'
import ShowTasks from './components/ShowTasks.js'
import AddTask from './components/AddTask.js'

function App() {
  //custom hook -> 
  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      //lazy initialisation -> funktion wird beim mounten einmalig ausgeführt
      const stickyValue = window.localStorage.getItem(key)

      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue
    });
    //immer, wenn referenzierte Werte sich verändern, wird useEffect ausgeführt
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    //Rückgabewert vom Hook
    return [value, setValue];
  }
  //global State
  const [tasks, setTasks] = useStickyState([], "task")
  
  //Task ist beendet -> components/showTasks.js
  const onDone = (event) => {
    setTasks(
      tasks.filter((task) => (
        task.title !== event.title
    )))
  }
  //Task wird zum global State hinzugefügt -> components/AddTasks.js
  const addTask = (task) => {
    setTasks([...tasks, {title:task}]);
  }

  return (
    <div className="App border rounded border-sky-700 p-16 m-32">
      <ShowTasks 
        tasks={tasks}
        onDone={onDone}/>
      <AddTask
        addTask={addTask}/>
    </div>
  );
}

export default App;
