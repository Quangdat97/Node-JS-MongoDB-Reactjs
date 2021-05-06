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

const getdata = () => axios.get('http://localhost:5000/api').then(res => res.data);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      greeting:''
    }

  }
  
  componentWillMount() {
    getdata().then(res=>{
      this.setState({greeting: res.sayHi})
    });
  }
  
  render(){
    console.log(this.state.greeting)
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
