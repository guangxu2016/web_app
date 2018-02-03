import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
// import { Link } from 'react-router'
//
// import './style.less'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {

        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>

        )
    }
}

export default Category