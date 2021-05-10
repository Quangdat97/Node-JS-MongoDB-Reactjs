import React from 'react';
import {home_click, product_click, login_click} from '../../router/Link_dieuhuong'
import axios from 'axios';
import { Menu, Dropdown } from 'antd';
import {UserOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux'
import {login_account, change_edit} from '../../Redux_toolkit/AccountReducer'


function Header (){

    const dispath = useDispatch();
    const data_store = useSelector(state => state.Accounts)
    console.log(data_store);

    const check_token = (token) =>(
        axios.post('http://localhost:5000/verify',{token}).then(res => res.data)
    );
    
    const menu = (
        <Menu onClick={()=>Logout()}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
    );
    
    const Logout=()=>{
        localStorage.removeItem('account');
        localStorage.removeItem('token');
        const action = login_account();
        dispath(action);
        login_click();
    }
    
    const check_login=()=>{
        console.log(data_store.account + '     count');
        if(data_store.account===null)
        {
            return(
                <button onClick={()=> {login_click()}} className="bp3-button bp3-minimal bp3-icon-user">Login</button>
            )
        }
        else
        {
            return(
                <Dropdown overlay={menu}>
                    <button className="bp3-button bp3-minimal bp3-icon-user">
                        {data_store.account}
                    </button>
                </Dropdown>
            )
        }
    }

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

                    {check_login()}
                    
                    <button onClick={()=> check_token(localStorage.getItem('token'))} className="bp3-button bp3-minimal bp3-icon-notifications" />
                    <button onClick={()=>dispath(change_edit())} className="bp3-button bp3-minimal bp3-icon-cog" />
                    
                </div>
            </div>
        </nav>
    );

}


export default Header;