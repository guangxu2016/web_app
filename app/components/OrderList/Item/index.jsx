import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { postComment } from '../../../fetch/user/orderlist.js'
import Star from '../../Star'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 2,  // commentState  0-未评价 1-评价中 2-已评价
            stars: {}
        }
    }
    render() {
        const data = this.props.data
        console.log(data)
        return (
            <div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            this.state.commentState === 0
                            //    未评价
                            ?
                                <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                                : this.state.commentState === 1
                            //    评价中
                            ? ""
                                // 已评价
                                :  <button className="btn unseleted-btn">已评价</button>
                        }
                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                {
                    // “评价中”才会显示输入框
                    this.state.commentState === 1
                    ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                            <Star star="0" clickCallback={this.starClickCallback.bind(this)}/>
                        </div>
                        <button className="btn" onClick={this.submitClickHandle.bind(this)}>提交</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    : ''
                }
            </div>
        )
    }
   componentDidMount() {
        //获取首次进入页面的commentState
        this.setState({
           commentState:this.props.data.commentState
       })
   }
    showComment() {
        // 显示输入框
        this.setState({
            commentState: 1
        })
    }
    hideComment() {
        // 隐藏输入框
        this.setState({
            commentState: 0
        })
    }
    submitClickHandle() {
        //提交评论的函数
        const submitComment = this.props.submitComment
        const id = this.props.data.id
        //评论输入框
        const commentTextDom = this.refs.commentText
        //trim()是去掉字符串左边、右边的空格
        const value = commentTextDom.value.trim()
        if(!value) {
            return
        }
    //提交评论内容
        submitComment(id, value, this.commentOk.bind(this))
    }
    commentOk() {
        //已经评价，修改状态表
        this.setState({
            commentState: 2
        })
    }


    starClickCallback(star) {
        let stars = this.state.stars
        const id = this.props.data.id
        stars[id] = star

        this.setState({
            stars: stars
        })
    }
}

export default Item