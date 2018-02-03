import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import HomeHeader from '../../components/HomeHeader/index'
// import * as userInfoActionsFromOtherFile from "../../actions/userinfo";
// import {bindActionCreators} from "redux/index";
// import Category from '../../components/Category'
// import Ad from './subpage/Ad'
// import List from './subpage/List'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        // 当前的props、state和接下来的props、state如果相同，返回false，不进行更新
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
