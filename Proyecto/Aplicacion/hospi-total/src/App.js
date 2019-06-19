import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import '@material-ui/icons/Menu'

import Home from './components/home/home'
function App() {
    return ( 
        <div className="App">
            <Home></Home>
        </div>
    );
}

export default App;