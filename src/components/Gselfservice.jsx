import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../assets/sass/Gselfservice.scss'
const Gselfservice = class Gselfservice extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            self: true
        }
    }
    tab(e) {
        this.setState({
            self: e.target.hasAttribute('class') ? true : false
        })
    }
    render() {
        return (
            <div id="selfservice">
                <div className="clearfix con" style={{'position':'relative'}}>
                    <div className="selfservice">
                        <ul>
                            <li>
                                <p onClick={this.tab.bind(this)} className="firsth1">个人业务自助服务</p>
                                <div className="selfBusiness" style={{ display: this.state.self ? 'block' : 'none' }}>
                                    <button><Link to="/register">注册</Link></button><button className="dl"><Link to="/login">登录</Link></button>
                                    <p><a href="javascript:;">·忘记交易密码</a></p>
                                    <button className="hezuojigou">合作机构登录</button>
                                </div>
                            </li>
                            <li>
                                <p onClick={this.tab.bind(this)}>团体业务自助服务</p>
                                <div className="teamBusiness" style={{ display: !this.state.self ? 'block' : 'none' }}>
                                    <p><a href="javascript:;">个人登录</a></p>
                                    <p className="wubd"><a href="javascript:;">·开通和重置密码</a></p>
                                    <p><a href="javascript:;">·企业登录</a></p>
                                    <p className="wubd"><a href="javascript:;">·忘记密码</a>
                                        <a href="javascript:;">·立即注册</a></p>
                                </div>
                            </li>
                        </ul>
                        <div className="threeDenglu">
                            <div>
                                <a href="javascript:;"><img src={require('../assets/images/zsgs.gif')} />
                                    <p><span>掌上国寿</span></p>
                                </a>
                            </div>
                            <div>
                                <a href="javascript:;"><img src={require('../assets/images/weixin.gif')} />
                                    <p><span>官方微信</span></p>
                                </a>
                            </div>
                            <div>
                                <a href="javascript:;"><img src={require('../assets/images/zaixiankefu.gif')} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gselfservice;