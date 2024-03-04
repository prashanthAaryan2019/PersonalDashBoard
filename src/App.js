
import React from 'react'
import {BrowserRouter as Router,NavLink, Route,Routes} from 'react-router-dom'
import styles from  './App.module.css'
import ToDoList from './components/ToDoListComponent.js';
import UserProfile from './components/UserProfileComponent.js';
import WeatherComponent from './components/WeatherComponent.js';
import  store from './store/store.js'
import userData from './userData.js'
import { Provider } from 'react-redux';

export default function App() {
 
  return (
    <>
    <Router>
      <div className={styles.container}>
        <nav >
          <ul className={styles.navBar} >
            <li><NavLink to="/profile" className="active-tab">View Profile</NavLink></li>
            <li><NavLink to="/todo" className="active-tab">To-Do-List</NavLink></li>
            <li><NavLink to="/weather" className="active-tab">Weather</NavLink></li>
          </ul>
        </nav>
     
      <Routes>
         <Route  path ="/" element ={<UserProfile {...userData} className={styles.userProfile}/>}/>
        <Route  path ="/profile" element ={<UserProfile {...userData} className={styles.userProfile}/>}/>
        <Route  path ="/todo" element ={<ToDoList className={styles.todolist}/>}/>
        <Route  path ="/weather" element ={  <Provider store={store}>
         <WeatherComponent></WeatherComponent>
         </Provider>}/>
        <Route render={()=> <div> Page not found</div>}/>
      </Routes>
      </div>
     
     </Router>

   </>

  );
}

