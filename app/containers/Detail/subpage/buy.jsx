import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

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
                <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)} />
            </div>
        )
    }

    // 检查登录状态
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if(!userinfo.username) {            // 登录成功后的router
            hashHistory.push("/Login/" + encodeURIComponent("/detail/" + id))
            return false
        }
        return true
    }
    // 购买事件
    buyHandle() {
    //    验证登录
        const loginFlag = this.loginCheck()
        if(!loginFlag) {
            return
        }

    //    购买成功跳转到用户
        hashHistory.push("/User")
    }
    // 收藏事件
    storeHandle() {

    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)