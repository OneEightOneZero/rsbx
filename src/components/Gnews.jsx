import React, { Component } from 'react';
import '../assets/sass/Gnews.scss'

const Gnews = class Gnews extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            page: 0
        }
    }
    reduce() {
        let currentPage = this.state.page - 1;
        if(currentPage<0){
            currentPage=4;
        }
        this.setState({
            page: currentPage
        })
    }
    add() {
        let currentPage = this.state.page + 1;
        if(currentPage>=5){
            currentPage=0;
        }
        this.setState({
            page: currentPage
        })
    }
    render() {
        return (
            <div id="news">
                <div className="news con clearfix">
                    <div className="news_l fl">
                        <div onClick={this.reduce.bind(this)} className={this.state.page==0?'news_l_l':'news_l_l you'}></div>
                        <div className="news_l_c">
                            <ul style={{'transform':`translateX(-${270*this.state.page}px)`}}>
                                <li><a href=""><img src={require('../assets/images/news1.bmp')} /></a></li>
                                <li><a href=""><img src={require('../assets/images/news2.jpg')} /></a></li>
                                <li><a href=""><img src={require('../assets/images/news3.jpg')} /></a></li>
                                <li><a href=""><img src={require('../assets/images/news4.jpg')} /></a></li>
                                <li><a href=""><img src={require('../assets/images/news5.jpg')} /></a></li>
                                <li><a href=""><img src={require('../assets/images/news1.bmp')} /></a></li>
                                <li><a href=""><img src={require('../assets/images/news2.jpg')} /></a></li>
                            </ul>
                        </div>
                        <div onClick={this.add.bind(this)} className={this.state.page==2?'news_l_r wu':'news_l_r'}></div>
                    </div>
                    <div className="news_r">
                        <div>
                            <a href="javascript:;"><img src={require('../assets/images/newsright1.gif')} />
                                <span>支持下载</span>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;"><img src={require('../assets/images/newsright2.gif')} />
                                <span>服务网点</span>
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;"><img src={require('../assets/images/newsright3.gif')} />
                                <span>常见问题</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gnews;