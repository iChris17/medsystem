import React from 'react';
import logo from '../../logo.svg';
import './home.css'

class Home extends React.Component {
    render() {
        return ( 
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a className="button-collapse show-on-large" data-activates="sidenav">
                            <i className="material-icons">menu</i>
                        </a>
                        <a href="#" className="brand-logo">
                            <img src = {logo} className="App-logo" alt="logo" />
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" className="navbar-list">Notificaciones</a></li>
                            <li><a href="#" className="navbar-list">Perfil</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="side-nav" id="sidenav"></ul>
            </div>
        )
    }
}

export default Home;