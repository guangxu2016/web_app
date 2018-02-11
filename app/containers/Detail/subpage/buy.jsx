import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }

    render() {
        return (
            <div>
                <BuyAndStore
                    isStore={this.state.isStore}
                    buyHandle={this.buyHandle.bind(this)}
                    storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }

    // 检查登录状态
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {            // 登录成功后的router
            hashHistory.push("/Login/" + encodeURIComponent("/detail/" + id))
            return false
        }
        return true
    }

    componentDidMount() {
        // console.log(123,this.props.store)
        // console.log(456,this.props.storeActions)
        this.checkStoreState()
    }

    //检验当前商户是否已经被收藏
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store
        //some只要有一个满足即可
        store.some(item => {
            // 列表的id和当前id相同
            if (item.id === id) {
                this.setState({
                    isStore: true
                })
                return true
            }
        })
    }

    // 购买事件
    buyHandle() {
        //    验证登录
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        //    购买成功跳转到用户
        hashHistory.push("/User")
    }

    // 收藏事件
    storeHandle() {
//    验证登录
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return
        }

        const id = this.props.id
        const storeActions = this.props.storeActions
        if (this.state.isStore) {
            //当前被收藏，点击时取消收藏
            storeActions.rm({id: id})
        } else {
            //当前商户未被收藏，点击时要啊执行收藏
            storeActions.add({id: id})
        }
        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })
    }
}
//-----------------redux---------------------------
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)