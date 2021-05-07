import React, { Component } from 'react';
import {home_click, product_click, login_click} from '../../router/Link_dieuhuong'

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <nav className="bp3-navbar bp3-dark" style={{position: 'fixed', top:0}}>
                <div style={{margin: '0 auto', width: '80%'}}> {/* ADD ME */}
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading" style={{fontSize: '26px'}}>Mona Shop</div>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button onClick={()=> home_click()} className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                        <button onClick={()=> product_click()} className="bp3-button bp3-minimal bp3-icon-list-detail-view">Product</button>
                        <span className="bp3-navbar-divider" />
                        <button onClick={()=> login_click()} className="bp3-button bp3-minimal bp3-icon-user">{this.props.login}</button>
                        <button className="bp3-button bp3-minimal bp3-icon-notifications" />
                        <button className="bp3-button bp3-minimal bp3-icon-cog" />
                    </div>
                </div>
            </nav>

        );
    };
}

export default Header;