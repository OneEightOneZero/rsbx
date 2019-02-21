import React, { Component } from 'react';
import '../assets/sass/Gfooter.scss';

const Gfooter = class Gfooter extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer con">
                    <ul className="clearfix">
                        <li><a href="javascript:;">联系我们</a></li>
                        <li><a href="javascript:;">网站声明</a></li>
                        <li><a href="javascript:;">意见反馈</a></li>
                    </ul>
                    <p>Copyright@2013 China life Pension Company Ltd.All Rights Reserved.</p>
                    <p>中国人寿养老保险股份有限公司版权所有<a href="javascript:;">京ICP备07500249号</a></p>
                    <div className="zztj">
                        <a href="https://www.cnzz.com/stat/website.php?web_id=1254038602" target="_blank" title="站长统计">
                            <img border="0" hspace="0" vspace="0" src="http://icon.cnzz.com/img/pic.gif" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gfooter; 