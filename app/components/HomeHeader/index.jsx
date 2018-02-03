import React from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { Link, hashHistory } from 'react-router'
//
// import SearchInput from '../SearchInput'

import './style.css'
import "../index.css"

class HomeHeader extends React.Component {

    render() {
        return (
            <div className="clear-fix">
                <div className="float-left">
                    北京
                    <i className="icon-angle-down"></i>
                </div>
                <div className="headerContext float-left">
                    <i className="icon-search"></i>
                    <input type="text" placeholder="请输入关键字"/>
                </div>
                <div className="float-right ">
                    <i className="icon-user"></i>
                </div>
            </div>
        )
    }
}

export default HomeHeader