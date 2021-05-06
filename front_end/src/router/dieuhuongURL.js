
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Main from '../Components/Partial/main';
import Category from '../Components/Category/Categories';
import Signup from '../Components/User/Signup';
import Login from '../Components/User/Login';

class DieuhuongURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" ><Login/></Route>
                    <Route path="/signup" ><Signup/></Route>
                    <Route path="/category" ><Category/></Route>
                    <Route path="/" ><Main/></Route>
                </Switch>
                
            </div>
        );
    }
}

export default DieuhuongURL;