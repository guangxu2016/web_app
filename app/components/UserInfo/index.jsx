import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import "./userinfo.css"

class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="userinfo-container">
               {/*<p>{this.props.username}</p>*/}
               {/*<p>{this.props.city}</p>*/}
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    &nbsp;
                    <span>{this.props.city}</span>
                </p>
            </div>
        )
    }
}

export default UserInfo