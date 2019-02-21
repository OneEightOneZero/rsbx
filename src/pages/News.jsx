import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Gheader from '../components/Gheader.jsx';
import Gnav from '../components/Gnav.jsx';
import Gfooter from '../components/Gfooter.jsx';

import '../assets/sass/News.scss'
const News = class News extends Component {
    render() {
        return (
            <div>
                <Gheader />
                <div id="tupian">
                    <div className="tupian"></div>
                </div>
                <Gnav />
                <div id="article">
                    <div className="clearfix con article">
                        <div className="dqwz">
                            您当前所在位置：
                            <span><Link to="/">首页</Link>&nbsp;&gt;&nbsp;<Link to="/dongtai">公司动态</Link>&nbsp;&gt;&nbsp;<a className="SkinObject" href="javascript:;">公司新闻</a></span>
                        </div>
                        <div className="zhengwen">
                            <table className="normal" cellPadding="0" cellSpacing="0" border="0">
                                <tbody>
                                    <tr>
                                        <td colSpan="2" align="center"> <h1>中国人寿保险（集团）公司党委书记、董事长王滨新春致辞</h1> </td>
                                    </tr>
                                    <tr>
                                        <td style={{'height': '30px','lineHeight':'30px'}} align="center" width="60%"> <span style={{'fontFamily':'微软雅黑','paddingLeft':'114px','fontSize':'12px','width':'984px','float':'left','textAlign':'center'}}>信息来源：系统管理员 　　发布时间：2019年02月01日</span>
                                            <div style={{'borderBottom':'rgb(204,204,204) 1px  dashed','height':'11px','overflow':'hidden','width':'1098px'}}></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" className="conzt">
                                            <div id="fontsize1" className="xilan_con">
                                                <p><img src={require('../assets/images/News1.jpg')} /></p>
                                                <p align="left">　　又是一年春光好！</p>
                                                <p align="left">　　在中国人最牵挂的农历新春佳节即将到来之际，我谨代表中国人寿向长期关心支持我们事业发展的各位领导、各界朋友和新老客户表示衷心的感谢，送上真切的祝福！向为中国人寿发展作出贡献的各位同志致以诚挚的慰问！祝大家在新的一年里，身体健康、工作顺利、家庭幸福、万事如意！</p>
                                                <p align="left">　　过去的一年，我们深入贯彻习近平新时代中国特色社会主义思想，精神昂扬、奋发进取，战胜了复杂严峻形势带来的挑战，在高质量发展道路上迈出了坚实步伐。</p>
                                                <p align="left">　　一年来，我们充分彰显了央企担当——10亿元助力国家融资担保基金设立，超过3600亿元为港珠澳大桥、中俄东线天然气管道工程、国家石油储备基地建设等重大项目提供风险保障，200亿元纾困专项产品开险资之先，5亿元扶贫基金深化精准扶贫为行业之首，广发银行新增贷款59%投向了民营和中小微企业。</p>
                                                <p align="left">　　一年来，我们的经营局面保持平稳——集团合并保费收入超过6467亿元，合并总资产近4万亿元；《财富》世界500强排名上升至第42位，世界品牌500强排名上升至第139位、持续领跑中国金融行业。寿险公司、广发银行、资产公司、财险公司、养老险公司、海外公司、国寿投资公司都巩固了市场地位、提升了发展质量。</p>
                                                <p align="left">　　一年来，我们的发展动能有所提升——综合经营带动了多赢发展，新增战略合作单位14家、总量达到81家，落地综合金融服务项目53个，保银协同投融资新增规模1031亿元；产品创新、服务创新和科技创新取得突破，寿险新一代全面投入运营，信息科技全面赋能服务、销售与管理，司法援助保险社会反响很好。</p>
                                                <p align="left">　　辞旧迎新际、继往开来时。刚刚跨入的2019年，是我们伟大祖国70周年华诞，也是中国人寿成立70周年。70年披荆斩棘，70年风雨兼程。繁荣昌盛的祖国始终是我们发展最有力、最坚强的后盾；积极投身中国特色社会主义伟大事业、实现中华民族的伟大复兴，是我们最神圣的使命。改革大潮浩浩荡荡，历史车轮滚滚向前。迈进新时代，中国人寿将深入贯彻落实习近平新时代中国特色社会主义思想，充分发挥金融保险畅通国民经济循环的功能，积极服务实体经济和供给侧结构性改革，深度参与三大攻坚战，为全面建成小康社会做出更大贡献。</p>
                                                <p align="left">　　我们将始终立足提升客户体验，坚持创新驱动，更好地满足客户多元化金融保险需求，也为社会和人民的获得感、幸福感、安全感提升作出更大贡献！</p>
                                                <p align="left">　　我们将以改革创新、真抓实干的精神推开时代的大门、抓住发展的机遇，加快推进从销售主导向销售与服务并重转型、从人力驱动向人力与科技双轮驱动转型、从规模取向向价值与规模有机统一转型，在综合化经营、科技化创新、国际化布局上取得重大突破，全力建设党建引领型、价值优先型、科技驱动型、服务卓越型企业，在高质量发展道路上大步前进。</p>
                                                <p align="left">　　回顾历史，70年来，我们一直肩负着中国保险业探索者、开拓者和领跑者的历史使命，始终占据市场先机、取得了巨大的成绩。</p>
                                                <p align="left">　　当前，世界正面临百年未有之大变局，国家正处在重要战略机遇期，中国人寿则更应革故鼎新、踵事增华，方不负我们的使命与担当。</p>
                                                <p>　　面向未来，让我们更加紧密地团结在以习近平总书记为核心的党中央周围，高举信仰、信念、信心的旗帜，用奋斗寻找答案、用激情点燃梦想，凝聚百万国寿将士的磅礴力量，团结一致加油干，重振国寿再出发！</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Gfooter />
            </div>
        )
    }
}
export default News;