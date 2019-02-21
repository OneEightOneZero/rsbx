import React,{Component} from 'react'
import '../assets/sass/Gheader.scss'
const Gheader = class Gheader extends Component{
    render(){
        return(
            <div id="header">
                <header className="con">
                    <div className="header_top clearfix">
                        <ul>
                            <li><a href="#">集团首页</a></li>
                            <li><a href="#">人才招聘</a></li>
                            <li><a href="#">联系我们</a></li>
                            <li><a href="#">收藏本站</a></li>
                        </ul>
                    </div>
                    <div className="header_bottom">
                        <h1><a href="javascript:;">中国人寿养老保险股份有限公司</a></h1>
                        <div className="kf"><img src={require('../assets/images/headerphone.png')} alt="客户服务热线"/></div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Gheader;