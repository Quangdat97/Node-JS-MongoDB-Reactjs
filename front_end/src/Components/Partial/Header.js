import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Header extends Component{

    render(){
        return (
            <nav className="bp3-navbar bp3-dark" style={{position: 'fixed', top:0}}>
                <div style={{margin: '0 auto', width: '80%'}}> {/* ADD ME */}
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading" style={{fontSize: '26px'}}>Mona Shop</div>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button className="bp3-button bp3-minimal bp3-icon-home">
                            <Link to="/">Home</Link>
                        </button>
                        <button className="bp3-button bp3-minimal bp3-icon-list-detail-view">
                            <Link to="/category">Product</Link>
                        </button>
                        <span className="bp3-navbar-divider" />
                        <button className="bp3-button bp3-minimal bp3-icon-user" />
                        <button className="bp3-button bp3-minimal bp3-icon-notifications" />
                        <button className="bp3-button bp3-minimal bp3-icon-cog" />
                    </div>
                </div>
            </nav>

        );
    };
}

export default Header;