
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Main from '../Components/Partial/main';
import Category from '../Components/Category/Categories';

class DieuhuongURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/category"  component={Category}/>
                    <Route path="/" component={Main} />
                </Switch>
                
            </div>
        );
    }
}

export default DieuhuongURL;