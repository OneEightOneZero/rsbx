import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/sass/Gcontent.scss';
const Gcontent = class Gcontent extends Component {
    render() {
        return (
            <div className="gcontent fr">
                <h1>{this.props.newsTitle}</h1>
                <div className="gcontent_top clearfix">
                    <div className="left_img fl">
                        <img src={require('../assets/images/mine3.png')} border="0" />
                    </div>
                    <div className="right_content fr">
                        <div className="title clearfix">
                            <h2><a href="/rsbx/504626/506729/516077/603793/index.html" target="_blank" title="2019年中国人寿工作会议在京召开，明确重振国寿战略部署">2019年中国人寿工作会议在京召开，明确重振国寿战略部署</a></h2>
                            <span>[2019-01-22]</span>
                        </div>
                        <div className="neirong">
                            <p>　　 　　1月22日，中国人寿2019年工作会议在京召开。中国人寿集团党委书记、董事长王滨在大会上作题为《团结一致加油干 重振国寿再出发》的讲话，集团公司总裁袁长清作年度经营管理报告。会议充分肯定20...</p>
                        </div>
                        <a href="/rsbx/504626/506729/516077/603793/index.html" target="_blank" className="xiangxi">[查看详细]</a>
                    </div>
                </div>
                <div id="list">
                    <div className="list">
                        <ul className="data_ul clearfix">
                            <li><a href="/rsbx/504626/506729/603742/index.html" target="_blank" title="2019年中国人寿工作会议在京召开，明确重振国寿战略部署">2019年中国人寿工作会议在京召开，明确重振国寿战略部署</a><span>[2019-01-22]</span></li>
                            <li><a href="/rsbx/504626/506729/604380/index.html" target="_blank" title="中国人寿保险（集团）公司党委书记、董事长王滨新春致辞">中国人寿保险（集团）公司党委书记、董事长王滨新春致辞</a><span>[2019-02-01]</span></li>
                            <li><a href="/rsbx/504626/506729/603679/index.html" target="_blank" title="公司管理资产规模突破7300亿元">公司管理资产规模突破7300亿元</a><span>[2019-01-23]</span></li>
                            <li><a href="/rsbx/504626/506729/601971/index.html" target="_blank" title="公司“国寿嘉年月月盈”产品荣获“最受工资理财用户喜爱的产品奖”">公司“国寿嘉年月月盈”产品荣获“最受工资理财用户喜爱的产品奖”</a><span>[2018-12-20]</span></li>
                            <li><a href="/rsbx/504626/506729/601897/index.html" target="_blank" title="中国人寿推出国寿鑫享金生年金保险（B款）">中国人寿推出国寿鑫享金生年金保险（B款）</a><span>[2018-12-17]</span></li>
                            <li><a href="/rsbx/504626/506729/601857/index.html" target="_blank" title="中国人寿养老险公司荣获“年度最具影响力养老险公司”金龙奖">中国人寿养老险公司荣获“年度最具影响力养老险公司”金龙奖</a><span>[2018-12-13]</span></li>
                            <li><a href="/rsbx/504626/506729/595777/index.html" target="_blank" title="国寿养老2018年上半年净增管理资产规模首破千亿">国寿养老2018年上半年净增管理资产规模首破千亿</a><span>[2018-07-30]</span></li>
                            <li><a href="/rsbx/504626/506729/590597/index.html" target="_blank" title="聚焦汶川地震孤儿十年成长！纪录电影《川流不息》献映">聚焦汶川地震孤儿十年成长！纪录电影《川流不息》献映</a><span>[2018-05-18]</span></li>
                            <li><a href="/rsbx/504626/506729/587238/index.html" target="_blank" title="养老险公司召开2018年工作会议——中国人寿养老险公司管理资产总规模突破5600亿元">养老险公司召开2018年工作会议——中国人寿养老险公司管理资产总规模突破5600亿元</a><span>[2018-01-31]</span></li>
                        </ul>
                    </div>
                    <div id="page">
                        <div className="pageLeft fl">
                            <span className="firstPage">首页</span>
                            <span className="perviousPage">上一页</span>
                            <span className="pointer">下一页</span>
                            <span className="pointer">尾页</span>
                        </div>
                        <div className="pageRight fl">
                            当前页:
                            <span className="red">1</span> /
                            <span>86</span> 跳转至第
                            <input size="2" defaultValue="1" type="text" />页
                            <button>跳转</button>
                        </div>
                        <input type="hidden" totalpage="86" />
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return state;
    }, (dispatch) => {
        return {};
    })(Gcontent);