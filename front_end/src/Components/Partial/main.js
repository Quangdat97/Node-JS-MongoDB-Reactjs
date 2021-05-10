import React, { Component } from 'react';
import axios from 'axios';
import {login_click} from '../../router/Link_dieuhuong'
import Login from '../User/Login';


class Main extends Component{
    render(){
        console.log(window.Redux)
        if(localStorage.getItem('account')===null)
        {
            login_click();
            return <Login></Login>
        }
        return(
            <div >
                <img className="img_home" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-5.jpg" alt="img" />
            </div> 
        );
    }
};

export default Main;