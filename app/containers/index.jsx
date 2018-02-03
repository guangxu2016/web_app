import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//是通过dispatch将action包裹起来，这样可以通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用)
//一般情况下，可以通过Provider将store通过React的context属性向下传递，bindActionCreators的唯一用处就是需要传递action creater到子组件，并且改子组件并没有接受上传递的store和dispatch
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

import "./index.css";
//头部
// import HomeHeader from "../components/HomeHeader";

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    componentDidMount() {

        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName == null) {
            cityName = "北京"
        }

        this.props.userInfoActions.update({
            cityName:cityName
        })


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
function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
