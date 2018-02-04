import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import * as userInfoActionsFromOtherFile from "../../actions/userinfo";
// import CurrentCity from '../../components/CurrentCity'
// import CityList from '../../components/CityList'

// import { CITYNAME } from '../../config/localStoreKey'
// import localStore from '../../util/localStore'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        console.log(this.props.userInfoActions)
        console.log(this.props.userinfo)
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>

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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
