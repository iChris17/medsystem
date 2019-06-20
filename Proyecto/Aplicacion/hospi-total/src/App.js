import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from '../src/components/sidebar/sidebar';
function App() {
    return ( 
        <div className="App">
            <Sidebar></Sidebar>
        </div>
    );
}

export default App;