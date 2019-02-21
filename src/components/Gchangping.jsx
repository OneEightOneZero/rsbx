import React, { Component } from 'react'

import '../assets/sass/Gchangping.scss'
const Gchangping = class Gchangping extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            rightData: [{
                title: '咨询测算',
                children: [
                    {
                        img: require('../assets/images/zxys1.gif'),
                        detail: ''
                    },
                    {
                        img: require('../assets/images/zxys2.gif'),
                        detail: '养老金精算咨询'
                    },
                    {
                        img: require('../assets/images/zxys3.gif'),
                        detail: '企业年金测算'
                    }
                ]
            }, {
                title: '专业管理',
                children: [
                    {
                        img: require('../assets/images/zygl1.gif'),
                        detail: '咨询服务'
                    },
                    {
                        img: require('../assets/images/zygl2.gif'),
                        detail: '投资管理'
                    },
                    {
                        img: require('../assets/images/zygl3.gif'),
                        detail: '账户管理'
                    }
                ]
            }, {
                title: '综合服务',
                children: [
                    {
                        img: require('../assets/images/zhfw1.gif'),
                        detail: '受托管理'
                    },
                    {
                        img: require('../assets/images/zhfw2.gif'),
                        detail: '消费者权益保护'
                    },
                    {
                        img: require('../assets/images/zhfw3.gif'),
                        detail: '增值服务'
                    }
                ]
            }],
            show: 0
        }
    }
    tab(e,show) {
        this.setState({
            show
        })
    }
    rightRender() {
        return (
            this.state.rightData.map((item, index) => {
                return <li onClick={(e)=>{this.tab.bind(this)(e,index)}} className={((index) => {
                    switch (index) {
                        case 0:
                            return 'zxcs';
                        case 1:
                            return 'zygl';
                        case 2:
                            return 'zhfw';
                    }
                })(index)} key={index} xuhao={index}>
                    <h3 className={index==this.state.show?'active':''}>{item.title}</h3>
                    <ul className={index==this.state.show?'u2':'u2 hidden'}>
                        {item.children.map((item2, index2) => {
                            return <li key={index2}>
                                <a href="">
                                    <img className={index == 0 && index2 == 0 ? 'img1' : ''} src={item2.img} />
                                    {!(index == 0 && index2 == 0) ? <p><span>{item2.detail}</span></p> : null}

                                </a>
                            </li>
                        })}
                    </ul>
                </li>
            })
        )
    }
    render() {
        return (
            <div id="changping">
                <div className="changping con clearfix">
                    <div className="changping_l fl">
                        <h1>我们的产品</h1>
                        <ul className="clearfix u1">
                            <li>
                                <div className="tupian"><img src={require('../assets/images/changping1.jpg')} /></div>
                                <ul className="u2">
                                    <li><a href="javascript:;">单一计划：管理便捷、回报高效</a></li>
                                    <li><a href="javascript:;">集合计划：简化流程、降低费用</a></li>
                                    <li><a href="javascript:;">视频：集合计划产品介绍</a></li>
                                </ul>
                                <ul className="u3 clearfix">
                                    <li><a href="javascript:;">受托管理</a></li>
                                    <li><a href="javascript:;">投资管理</a></li>
                                    <li><a href="javascript:;">账户管理</a></li>
                                </ul>
                                <div className="lijishengq"><a href="javascript:;">立即申请</a></div>
                            </li>
                            <li>
                                <div className="tupian"><img src={require('../assets/images/changping2.jpg')} /></div>
                                <ul className="u2">
                                    <li><a href="javascript:;">团体养老保障：低风险、高回报</a></li>
                                    <li><a href="javascript:;">个人养老保障：门槛低、收益快</a></li>
                                </ul>
                                <ul className="u3 clearfix">
                                    <li><a href="javascript:;">网上开户</a></li>
                                    <li><a href="javascript:;">立即购买</a></li>
                                </ul>
                                <div className="lijishengq"><a href="javascript:;">了解详情</a></div>
                            </li>
                            <li>
                                <div className="tupian"><img src={require('../assets/images/changping3.jpg')} /></div>
                                <ul className="u2">
                                    <li><a href="javascript:;">建职业年金</a></li>
                                    <li><a href="javascript:;">选中国人寿 </a></li>
                                </ul>
                                <ul className="u3 clearfix">
                                    <li><a href="javascript:;">政策及专家解读</a></li>
                                    <li><a href="javascript:;">八大核心优势</a></li>
                                </ul>
                                <div className="lijishengq"><a href="javascript:;">职业年金介绍</a></div>
                            </li>
                        </ul>
                    </div>
                    <div className="changping_r fr">
                        <div id="wntg" className="clearfix">
                            <div className="wntg fl">为您提供</div>
                            <div className="qczyfw fl">全程专业服务</div>
                        </div>
                        <ul className="u1">
                            {this.rightRender()}
                        </ul>
                        <div className="ylgh">
                            <h3>养老规划</h3>
                            <a href="javascript:;"><img src={require('../assets/images/ylgh.jpg')}/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gchangping;