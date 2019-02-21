import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import './src/assets/css/base.css';
import Home from './src/pages/Home.jsx';
import Login from './src/pages/Login.jsx';
import Register from './src/pages/Register.jsx';
import DongTai from './src/pages/DongTai.jsx';
import News from './src/pages/News.jsx';

let store = createStore((state = {
    newsTitle: '公司新闻'
}, action) => {
    switch (action.type) {
        case 'setNewsTitle':
            return {
                ...state,
                newsTitle: action.newsTitle
            };
        default:
            return state;
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dongtai" component={DongTai} />
                <Route path="/news" component={News} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('PC'));