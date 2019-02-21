import React, { Component } from 'react';

import '../assets/sass/Gmine.scss'

const Gmine = class Gmine extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            show: true,
            rightshow:true
        }
    }
    tab(e, show) {
        this.setState({
            show
        })
    }
    righttab(e, rightshow){
        this.setState({
            rightshow
        })
    }
    render() {
        return (
            <div id="mine">
                <div className="mine con clearfix">
                    <div className="mine_l fl">
                        <h2><span><a href="javascript:;">更多 &gt;&gt;</a></span><strong>关于我们</strong></h2>
                        <div className="mine_l_children fl">
                            <div className="mine_sp fl">
                                <div>
                                    <a href="javascript:;" target="_blank"><img src={require('../assets/images/mine1.jpg')} border="0" /></a>
                                    <a href="javascript:;" target="_blank" className="shi_tu"><img src={require('../assets/images/mine2.png')} border="0" /></a>
                                </div>
                            </div>
                            <ul className="mine_list fl">
                                <li><a href="" target="_blank">公开信息披露</a></li>
                                <li><a href="javascript:;" target="_blank">企业年金信息披露</a></li>
                                <li><a href="javascript:;" target="_blank">养老金产品信息披露</a></li>
                                <li><a href="javascript:;" target="_blank">保险资金运用信息披露</a></li>
                                <li><a href="javascript:;" target="_blank">关联交易信息披露</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mine_c fl">
                        <div className="minec_top">
                            <ul className="tabs">
                                <li onMouseOver={(e) => { this.tab.bind(this)(e, true) }}><span style={{ 'display': this.state.show ? 'block' : 'none' }}></span><a className={this.state.show ? 'selected' : ''} href="javascript:;">公司新闻</a></li>
                                <li onMouseOver={(e) => { this.tab.bind(this)(e, false) }}><span style={{ 'display': !this.state.show ? 'block' : 'none' }}></span><a className={!this.state.show ? 'selected' : ''} href="javascript:;">行业资讯</a></li>
                            </ul>
                            <div className="jiahao" style={{ 'display': this.state.show ? 'block' : 'none' }}>
                                <a href="javascript:;" target="_blank">更多 &gt;&gt;</a>
                            </div>
                            <div className="jiahao" style={{ 'display': !this.state.show ? 'block' : 'none' }}>
                                <a href="javascript:;" target="_blank">更多 &gt;&gt;</a>
                            </div>
                        </div>
                        <div style={{ 'display': this.state.show ? 'block' : 'none' }} className="tb1" name="公司新闻">
                            <div className="portlet">
                                <div align="left" className="portlet_top" style={{ 'display': 'none' }}>
                                    <span id="menu">
                                    </span>
                                    <div className="shadow dn">
                                        <ul className="float_list_ul">
                                        </ul>
                                    </div>
                                </div>
                                <div className="portlet_bottom">
                                    <div className="zheng2">
                                        <div className="zTop">
                                            <ul>
                                                <li style={{ 'display': 'block' }}>
                                                    <div className="zuo">
                                                        <img src={require('../assets/images/mine3.png')} border="0" />
                                                    </div>
                                                    <div className="you">
                                                        <h2><a href="javascript:;" target="_blank" title="2019年中国人寿工作会议在京召开，明确重振国寿战略部署">2019年中国人寿工作会议在京召开，明确重振国寿战...</a></h2>
                                                        <span>2019-01-22</span>
                                                        <p>　　1月22日，中国人寿2019年工作会议在京召开。中国人寿集团党委书记、董事长王滨在大会上作题为《团结一致加油干 重振...</p>
                                                        <a href="javascript:;" target="_blank">[查看详细]</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="zBottom">
                                            <p><a href="javascript:;" target="_blank" title="中国人寿保险（集团）公司党委书记、董事长王滨新春致辞">中国人寿保险（集团）公司党委书记、董事长王滨新春致...</a><span>[2019-02-01]</span></p>
                                            <p><a href="javascript:;" target="_blank" title="公司管理资产规模突破7300亿元">公司管理资产规模突破7300亿元</a><span>[2019-01-23]</span></p>
                                            <p><a href="javascript:;" target="_blank" title="公司“国寿嘉年月月盈”产品荣获“最受工资理财用户喜爱的产品奖”">公司“国寿嘉年月月盈”产品荣获“最受工资理财用户喜...</a><span>[2018-12-20]</span></p>
                                            <p><a href="javascript:;" target="_blank" title="中国人寿推出国寿鑫享金生年金保险（B款）">中国人寿推出国寿鑫享金生年金保险（B款）</a><span>[2018-12-17]</span></p>
                                            <p><a href="javascript:;" target="_blank" title="中国人寿养老险公司荣获“年度最具影响力养老险公司”金龙奖">中国人寿养老险公司荣获“年度最具影响力养老险公司”...</a><span>[2018-12-13]</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tb1" style={{ 'display': !this.state.show ? 'block' : 'none' }} name="行业资讯">
                            <div className="portlet">
                                <div align="left" className="portlet_top" style={{ 'display': 'none' }}>
                                    <span>
                                    </span>
                                    <div className="shadow dn">
                                        <ul className="float_list_ul">
                                        </ul>
                                    </div>
                                </div>
                                <div className="portlet_bottom">
                                    <div className="zheng2 fl">
                                        <div className="zTop">
                                            <ul>
                                                <li style={{ 'display': 'block' }}>
                                                    <div className="zuo">
                                                        <img src={require('../assets/images/mine4.jpg')} border="0" />
                                                    </div>
                                                    <div className="you">
                                                        <h2><a href="javascript:;" target="_blank" title="年金：养老第二支柱的双轨制风险">年金：养老第二支柱的双轨制风险</a></h2>
                                                        <span>2016-01-22</span>
                                                        <p>　　记者：蒋梦惟&nbsp; 来源：北京商报（2016-1-4） 　　目前，我国已有20多个省级城市公布了养老金并轨方案，随着养老...</p>
                                                        <a href="/rsbx/504626/506793/553484/index.html" target="_blank">[查看详细]</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="zBottom">
                                            <p><a href="javascript:;" target="_blank" title="22家机构悉数竞逐职业年金投管人 职业年金入市近在咫尺">22家机构悉数竞逐职业年金投管人 职业年金入市近在...</a><span>[2018-10-31]</span></p>
                                            <p><a href="javascript:;" target="_blank" title="居民养老保障再迎多重利好">居民养老保障再迎多重利好</a><span>[2018-10-31]</span></p>
                                            <p><a href="javascript:;" target="_blank" title="年轻一代需要养老规划 自愿性个人养老金亟待发展">年轻一代需要养老规划 自愿性个人养老金亟待发展</a><span>[2018-09-05]</span></p>
                                            <p><a href="javascript:;" target="_blank" title="首批养老目标基金有望月底获批">首批养老目标基金有望月底获批</a><span>[2018-07-18]</span></p>
                                            <p><a href="javascript:;" target="_blank" title="竞逐万亿“风口”！ 人寿、工行等8机构入选国家机关事业单位职业年金受托人">竞逐万亿“风口”！ 人寿、工行等8机构入选国家机关...</a><span>[2018-07-09]</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mine_r fl">
                        <div className="miner_top">
                            <div className="title">
                                <strong>净值披露</strong>
                            </div>
                            <div className="jz_pilu">
                                <div onClick={(e) => { this.righttab.bind(this)(e, true) }} className={this.state.rightshow?'jz_piluL act':'jz_piluL'}>
                                    养老金产品
                                </div>
                                <div onClick={(e) => { this.righttab.bind(this)(e, false) }} className={!this.state.rightshow?'jz_piluR act':'jz_piluR'}>
                                    养老保障产品
                                </div>
                            </div>
                        </div>
                        <div style={{'display':this.state.rightshow?'block':'none'}} className="tb2" name="养老金产品">
                            <div className="portlet">
                                <div align="left" className="portlet_top" style={{'display': 'none'}}>
                                    <span id="menu">
                                    </span>
                                    <div className="shadow dn">
                                        <ul className="float_list_ul">
                                        </ul>
                                    </div>
                                </div>
                                <div className="portlet_bottom">
                                    <div style={{'marginLeft':'15px'}}>
                                        <iframe frameBorder="0" height="285" name="wsdc" scrolling="yes" src="http://e.chinalifepension.cn/zgrs/netvalue/index.html" width="100%"></iframe>
                                    </div>
                                </div>
                            </div>       
                        </div>
                        <div style={{'display':!this.state.rightshow?'block':'none'}} className="tb1" id="ylbzcp" name="养老保障产品">
                            <div className="portlet">
                                <div align="left" className="portlet_top" style={{'display': 'none'}}>
                                    <span id="menu">
                                    </span>
                                    <div className="shadow dn">
                                        <ul className="float_list_ul">
                                        </ul>
                                    </div>
                                </div>
                                <div className="portlet_bottom">
                                    {/* <div className="jz_yljcp">
                                        <div className="jz_yljcpT">
                                            <strong style={{'width':'112px','paddingLeft':'8px'}}>产品名称</strong>
                                            <strong style={{'width':'66px'}}>单位净值</strong>
                                            <strong style={{'width':'28px'}}>变动</strong>
                                        </div>
                                        <ul className="jzpl_ul">
                                        </ul>
                                        <span style={{'float':'left','width':'214px','lineHeight':'27px'}}><a style={{'float':'right','fontSize':'12px','color':'#aaa','fontFamily':'宋体'}} href="javascript:;">更多 &gt;&gt;</a></span>
                                        <div className="jz_yljcpB">
                                            净值日期：2014年4月20日
                                        </div>
                                    </div> */}
                                    <div style={{'marginLeft':'15px'}}>
                                        <iframe frameBorder="0" height="285" name="wsdc" scrolling="yes" src="http://e.chinalifepension.cn/zgrs/netvalue/index.html" width="100%"></iframe>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gmine;
