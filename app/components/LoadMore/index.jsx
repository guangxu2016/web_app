import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        // console.log(wrapper)
        //节流
        let timeoutId
        function callback() {
            // console.log(123)
            const top = wrapper.getBoundingClientRect().top
            // console.log(top)
            const windowHeight = window.screen.height
            if(top && top<windowHeight) {
                //当wrapper已经被滚动到暴露在页面的可视范围之内的时候，会触发
                loadMoreFn()
            }
        }
        window.addEventListener("scroll",function() {
            // console.log(123)
            if(this.props.isLoadingMore) {
                return
            }
            console.log(456)
            //如果有清空
            if(timeoutId) {
                //放置连续触发
                clearTimeout(timeoutId)
            }
            //重新设置   100毫秒内不能触发第二次
            timeoutId = setTimeout(callback,50)
        }.bind(this),false)
    }

    loadMoreHandle() {
        this.props.loadMoreFn()
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ?<span>加载...</span>
                    :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }


}

export default LoadMore