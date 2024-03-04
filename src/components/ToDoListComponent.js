import { useState } from "react"
import styles from '../styles/ToDoList.module.css'
import GoToButton from "./GoHomeButtonComponent";

export default function ToDoList(){
  
    const [tasks, setTasks] =useState([]);
    const [newTaskContent, setNewTaskContent]= useState('')
    const addTask =()=>{
        if(newTaskContent.trim()!==''){
            setTasks([...tasks, {id:Date.now(),text:newTaskContent, completed:false}]);
            setNewTaskContent('')
        }
    }

    const deleteTask=(taskId)=>{
        setTasks(tasks.filter(task=>task.id!==taskId))
    }

    const toggleCompletion =(taskId)=>{
        setTasks(tasks.map(task=> task.id===taskId?{...task, completed: !task.completed}:task))
    }
  
    return(
       <div className={styles.ToDoList}>
           <h2>To-Do-List</h2>
           <ul>
            {tasks.map(task=>(
                <li key={task.id} className={styles.taskItem}>
                    <div className={styles.checkBoxColumn}>
                    <input type="checkbox" checked={task.completed} onChange={()=> toggleCompletion(task.id)}/>
                    </div>
                   <div className={styles.textColumn}>
                   <span className={task.completed? styles.completedTask:''} >{task.text}</span>
                   </div>
                   <div className={styles.buttonColumn}>
                   <button onClick={()=>deleteTask(task.id)}>Delete</button>
                   </div>
                   
                </li>

            ))}
           </ul>

           <form onSubmit={(e)=>{e.preventDefault(); addTask()}}>
            <input 
            type="text"
            className={styles.taskInput}
            value={newTaskContent}
            onChange={(e)=> setNewTaskContent(e.target.value)}
            placeholder="Add a new task"
            />
            <button type="submit" className={styles.addButton}>Add Task</button>
           </form> 
           <GoToButton/>
       </div>
      
  )
}