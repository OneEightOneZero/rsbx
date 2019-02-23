import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
import { connect } from 'react-redux';

const Gloading = class Gloading extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Spin tip="注册中..." style={{
                'position': 'fixed',
                'left': '50%',
                'top': '50%',
                'transform': 'translate(-50%,-50%)',
                'zIndex': 10,
                'display': this.props.show ? 'block' : 'none'
            }}>
            </Spin>
        )
    }
}
export default connect(
    state => state,
    dispatch => {
        return {}
    }
)(Gloading);