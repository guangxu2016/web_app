import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { hashHistory } from 'react-router'
//
// import Header from '../../components/Header'
// import CurrentCity from '../../components/CurrentCity'
// import CityList from '../../components/CityList'
//
// import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
//
// import { CITYNAME } from '../../config/localStoreKey'
// import localStore from '../../util/localStore'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return(
         <div>city</div>
        )
    }
}
export default City
