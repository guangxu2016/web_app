import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import LocalStore from '../util/localStore'
// import { CITYNAME } from '../config/localStoreKey'
// import * as userInfoActionsFromOtherFile from '../actions/userinfo'

import "./index.css";

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    componentDidMount() {
        var that = this
        setTimeout(function () {
            that.setState({
                initDone:true
            })
        },1000)
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                        : <div className="load">加载中......</div>
                }
            </div>
        )
    }
}
export default App
