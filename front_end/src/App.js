import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Partial/Header';
import Main from './Components/Partial/main';
import DieuhuongURL from './router/dieuhuongURL';
import Category from './Components/Category/Categories'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  state = {
    greeting:''
  }

  Test = async () => {
    try {
    const { data } = await axios.get('http://localhost:5000/api');
      this.setState({greeting: data.sayHi});
      console.log(data);
    } catch (error) {
      console.log(error.message)
    }
}

componentDidMount(){
  this.Test(); 
}

  render(){
    return (
      <Router>
          <div className="App">
            <Header></Header>
            <DieuhuongURL></DieuhuongURL>
          </div>
      </Router>
      
    );
  };
}

export default App;
