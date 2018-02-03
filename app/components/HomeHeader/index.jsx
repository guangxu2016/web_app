import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { Link, hashHistory } from 'react-router'
// import SearchInput from '../SearchInput'

import './style.css'
import "../index.css"

class HomeHeader extends React.Component {

    render() {
        return (
            //home头部
            <div id="home-header" className="clear-fix">
                {/*头 左边部分*/}
                <div className="left top">
                    <span>{this.props.cityName}</span>&nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                {/*头 中间部分*/}
                <div className="context left">
                    <i className="icon-search"></i>
                    <input type="text" placeholder="请输入关键字"/>
                </div>
                {/*头 右边部分*/}
                <div className="right bottom">
                    <i className="icon-user"></i>
                </div>
            </div>
        )
    }
}

export default HomeHeader