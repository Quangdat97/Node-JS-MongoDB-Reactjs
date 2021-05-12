import React, { Component } from 'react';
import {home_click, product_click, login_click} from '../../router/Link_dieuhuong'
import axios from 'axios';
import { Menu, Dropdown } from 'antd';
import {UserOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'


const check_token = (token) =>(
    axios.post('http://localhost:5000/verify',{token}).then(res => res.data)
);


class Header extends Component{
    menu = (
        <Menu onClick={()=>this.Logout()}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
    );

    Logout=()=>{
        localStorage.removeItem('account');
        localStorage.removeItem('token');
        login_click();
    }

    check_login=()=>{
        if(localStorage.getItem('account')===null)
        {
            return(
                <button onClick={()=> {login_click()}} className="bp3-button bp3-minimal bp3-icon-user">Login</button>
            )
        }
        else
        {
            return(
                <Dropdown overlay={this.menu}>
                    <button className="bp3-button bp3-minimal bp3-icon-user">
                        {this.props.account} 
                    </button>
                </Dropdown>
            )
        }
    }

    render(){

        return (
            <nav className="bp3-navbar bp3-dark" style={{position: 'fixed', top:0}}>
                <div style={{margin: '0 auto', width: '80%'}}> 
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading" style={{fontSize: '26px'}}>Mona Shop</div>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button onClick={()=> home_click()} className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                        <button onClick={()=> product_click()} className="bp3-button bp3-minimal bp3-icon-list-detail-view">Product</button>
                        <span className="bp3-navbar-divider" />

                        {this.check_login()}

                        <button className="bp3-button bp3-minimal bp3-icon-notifications" />
                        <button onClick={()=> check_token(localStorage.getItem('token'))} className="bp3-button bp3-minimal bp3-icon-cog" />
                    </div>
                </div>
            </nav>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        account: state.account
    }
}


export default connect(mapStateToProps)(Header)