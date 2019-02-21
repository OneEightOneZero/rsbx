import React, { Component } from 'react'
import '../assets/sass/Gnav.scss'

const Gnav = class Gnav extends Component {
    render() {
        return (
            <div id="nav">
                <nav className="con clearfix" style={{ 'position': 'relative' }}>
                    <ul>
                        <li><a href="javascript:;">首页</a></li>
                        <li>
                            <a href="javascript:;">机构客户</a>
                            <div className="ejcd">
                                <div className="ejcdL">
                                    <div className="ejcdL_cp">
                                        <h2>产品</h2>
                                        <span><a href="javascript:;">企业年金计划</a></span>
                                        <span><a href="javascript:;">养老保障产品</a></span>
                                        <span><a href="javascript:;">养老金产品</a></span>
                                        <span><a href="javascript:;">职业年金计划</a></span>
                                    </div>
                                    <div className="ejcdL_fw">
                                        <h2>服务</h2>
                                        <span><a href="javascript:;">受托管理服务</a></span>
                                        <span><a href="javascript:;">投资管理服务</a></span>
                                        <span><a href="javascript:;">账户管理服务</a></span>

                                    </div>
                                </div>
                                <div className="ejcdR">
                                    <div className="ejcdR_div">
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav1.gif')} />
                                            </a>
                                            <span><a href="javascript:;">自助下载</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">客户指南</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">服务网点</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav4.gif')} />
                                            </a>
                                            <span><a href="javascript:;">常见问题</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:;">个人客户</a>
                            <div className="ejcd">
                                <div className="ejcdL">
                                    <div className="ejcdL_cp">
                                        <h2>产品</h2>
                                        <span><a href="javascript:;">企业年金计划</a></span>
                                        <span><a href="javascript:;">养老保障产品</a></span>
                                        <span><a href="javascript:;">养老金产品</a></span>
                                        <span><a href="javascript:;">职业年金计划</a></span>
                                    </div>
                                    <div className="ejcdL_fw">
                                        <h2>服务</h2>
                                        <span><a href="javascript:;">受托管理服务</a></span>
                                        <span><a href="javascript:;">投资管理服务</a></span>
                                        <span><a href="javascript:;">账户管理服务</a></span>

                                    </div>
                                </div>
                                <div className="ejcdR">
                                    <div className="ejcdR_div">
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav1.gif')} />
                                            </a>
                                            <span><a href="javascript:;">自助下载</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">客户指南</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">服务网点</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav4.gif')} />
                                            </a>
                                            <span><a href="javascript:;">常见问题</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:;">咨询中心</a>
                            <div className="ejcd">
                                <div className="ejcdL">
                                    <div className="ejcdL_cp">
                                        <h2>产品</h2>
                                        <span><a href="javascript:;">企业年金计划</a></span>
                                        <span><a href="javascript:;">养老保障产品</a></span>
                                        <span><a href="javascript:;">养老金产品</a></span>
                                        <span><a href="javascript:;">职业年金计划</a></span>
                                    </div>
                                    <div className="ejcdL_fw">
                                        <h2>服务</h2>
                                        <span><a href="javascript:;">受托管理服务</a></span>
                                        <span><a href="javascript:;">投资管理服务</a></span>
                                        <span><a href="javascript:;">账户管理服务</a></span>

                                    </div>
                                </div>
                                <div className="ejcdR">
                                    <div className="ejcdR_div">
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav1.gif')} />
                                            </a>
                                            <span><a href="javascript:;">自助下载</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">客户指南</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">服务网点</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav4.gif')} />
                                            </a>
                                            <span><a href="javascript:;">常见问题</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:;">公开信息披露</a>
                            <div className="ejcd">
                                <div className="ejcdL">
                                    <div className="ejcdL_cp">
                                        <h2>产品</h2>
                                        <span><a href="javascript:;">企业年金计划</a></span>
                                        <span><a href="javascript:;">养老保障产品</a></span>
                                        <span><a href="javascript:;">养老金产品</a></span>
                                        <span><a href="javascript:;">职业年金计划</a></span>
                                    </div>
                                    <div className="ejcdL_fw">
                                        <h2>服务</h2>
                                        <span><a href="javascript:;">受托管理服务</a></span>
                                        <span><a href="javascript:;">投资管理服务</a></span>
                                        <span><a href="javascript:;">账户管理服务</a></span>

                                    </div>
                                </div>
                                <div className="ejcdR">
                                    <div className="ejcdR_div">
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav1.gif')} />
                                            </a>
                                            <span><a href="javascript:;">自助下载</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">客户指南</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">服务网点</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav4.gif')} />
                                            </a>
                                            <span><a href="javascript:;">常见问题</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:;">关于我们</a>
                            <div className="ejcd">
                                <div className="ejcdL">
                                    <div className="ejcdL_cp">
                                        <h2>产品</h2>
                                        <span><a href="javascript:;">企业年金计划</a></span>
                                        <span><a href="javascript:;">养老保障产品</a></span>
                                        <span><a href="javascript:;">养老金产品</a></span>
                                        <span><a href="javascript:;">职业年金计划</a></span>
                                    </div>
                                    <div className="ejcdL_fw">
                                        <h2>服务</h2>
                                        <span><a href="javascript:;">受托管理服务</a></span>
                                        <span><a href="javascript:;">投资管理服务</a></span>
                                        <span><a href="javascript:;">账户管理服务</a></span>

                                    </div>
                                </div>
                                <div className="ejcdR">
                                    <div className="ejcdR_div">
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav1.gif')} />
                                            </a>
                                            <span><a href="javascript:;">自助下载</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">客户指南</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav2.gif')} />
                                            </a>
                                            <span><a href="javascript:;">服务网点</a></span>
                                        </div>
                                        <div>
                                            <a href="javascript:;">
                                                <img src={require('../assets/images/nav4.gif')} />
                                            </a>
                                            <span><a href="javascript:;">常见问题</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="search">
                        <input type="button" />
                        <input type="text" placeholder="请输入关键字" />
                    </div>
                </nav>
            </div>
        )
    }
}
export default Gnav;