import React, {Component} from 'react';
import './App.css';
import { Router } from "@reach/router"
import Header from './Components/Partial/Header';
import Main from './Components/Partial/main';
import Category from './Components/Category/Categories';
import Signup from './Components/User/Signup';
import Login from './Components/User/Login';




class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header ></Header>
        
        <Router>
          <Category path='/category'></Category>
          <Signup path='/signup'></Signup>
          <Login path='/login'></Login>
          <Main path='/'></Main>
        </Router>
      </div>
      
    );
  };
}


export default App;
