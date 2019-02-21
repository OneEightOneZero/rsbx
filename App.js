import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import './src/assets/css/base.css'
import Home from './src/pages/Home.jsx'
import Login from './src/pages/Login.jsx'
import Register from './src/pages/Register.jsx'
import News from './src/pages/News.jsx'
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/news" component={News}/>
        </div>
    </Router>
, document.getElementById('PC'));