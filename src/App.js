
import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from './Home';
import 'antd/dist/antd.css'
import Tables from './Tables';
import Forms from './Forms';
import TodoList from './TodoList';
import API from './API';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/tables' component={Tables}/>
      <Route exact path='/forms' component={Forms}/>
      <Route exact path='/todolist' component={TodoList}/>
      <Route exact path='/api' component={API}/>
    </Router>
  );
}

export default App;
