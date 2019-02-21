import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Gheader from '../components/Gheader.jsx';
import Gnav from '../components/Gnav.jsx';
import Gfooter from '../components/Gfooter.jsx';
import Gcontent from '../components/Gcontent.jsx';

import '../assets/sass/DongTai.scss'
const DongTai = class DongTai extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            active: 0,
            title: ['公司新闻', '行业资讯', '通知公告']
        }
    }
    selected(e, active) {
        this.setState({
            active
        })
    }
    render() {
        return (
            <div>
                <Gheader />
                <div id="tupian">
                    <div className="tupian"></div>
                </div>
                <Gnav />
                <div id="dongtai">
                    <div className="dongtai con">
                        <div className="dqwz">
                            您当前所在位置：
                            <span><Link to="/">首页</Link>&nbsp;&gt;&nbsp;<Link to="/dongtai">公司动态</Link>&nbsp;&gt;&nbsp;<a className="SkinObject" href="javascript:;">公司新闻</a></span>
                        </div>
                        <div className="clearfix">
                            <div className="dongtai_l fl">
                                <div>
                                    <img src={require('../assets/images/dongtaititle.gif')} />
                                </div>
                                <ul>
                                    {this.state.title.map((item, index) => {
                                        return <li key={index} onClick={(e) => {
                                            this.selected.bind(this)(e, index);
                                            this.props.setNewsTitle.bind(this)(item);
                                        }}><a href="javascript:;" className={this.state.active == index ? 'active' : ''}>{item}</a></li>
                                    })}

                                </ul>
                                <div>
                                    <img src={require('../assets/images/dongtai1.jpg')} />
                                </div>
                            </div>
                            <Gcontent />
                        </div>
                    </div>
                </div>
                <Gfooter />
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {state};
    }, (dispatch) => {
        return {
            setNewsTitle(newsTitle){
                dispatch({
                    type:'setNewsTitle',
                    newsTitle
                })
            }
        }
    })(DongTai);