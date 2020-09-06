
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import MainDrawer from './containers/MainDrawer';
import Topic16_1 from './containers/Topic16_1';
import Topic16_2 from './containers/Topic16_2';
import Topic16 from './containers/Topic16';
import Topic8 from './containers/Topic8';
import { Route } from 'react-router-dom'
class App extends Component {
  render(){
  return (
      <div>
     
        <Route exact path="/" component={MainDrawer} />
        <Route path="/topic16" component={Topic16} />
        <Route path="/topic16_1" component={Topic16_1} />
        <Route path="/topic16_2" component={Topic16_2} />
        <Route path="/topic8" component={Topic8} />
    
      </div>    
   );
  }
}

export default App;
