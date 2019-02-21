import React, { Component } from 'react';
import '../assets/sass/Gbanner.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Gbanner = class Gbanner extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            page: 0,
            lunbo: true,
            img: [
                require('../assets/images/banner1.jpg'),
                require('../assets/images/banner2.jpg'),
                require('../assets/images/banner3.jpg'),
                require('../assets/images/banner4.jpg'),
                require('../assets/images/banner5.jpg'),
                require('../assets/images/banner6.jpg')
            ]
        }
        this.timer;
    }

    imgRender() {
        return (
            this.state.img.map((item, index) => {
                return <CSSTransition timeout={2000} className="lunbo" unmountOnExit key={index} href="javascript:;"><img src={this.state.img[this.state.page]} /></CSSTransition>
            })
        )
    }
    dotRender() {
        return (
            this.state.img.map((item, index) => {
                return <li onMouseOver={this.stop.bind(this)} onMouseOut={this.go.bind(this)} xuhao={index} key={index} className={this.state.page == index ? 'active' : ''}><a href="javascript:;"></a></li>
            })
        )
    }
    render() {
        return (
            <div id="banner">
                <TransitionGroup className="imgul">
                    {this.imgRender()}
                </TransitionGroup>
                <ul id="dotul">
                    {this.dotRender()}
                </ul>
            </div>
        )
    }
    stop(e) {
        this.setState({
            page: e.target.getAttribute('xuhao')
        })
        clearInterval(this.timer);
        this.timer = null;
    }
    go() {
        this.timer = setInterval(this.autoplay.bind(this), 2000);
    }
    autoplay() {
        let newPage = parseInt(this.state.page) + 1;
        if (newPage > 5) {
            newPage = 0;
        }
        this.setState({
            page: newPage
        })
    }
    componentWillMount() {
        this.timer = setInterval(this.autoplay.bind(this), 2000);
    }
}

export default Gbanner