import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import "./homead.css";

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-ad">
                <h2>超值特惠</h2>

            </div>
        )
    }
}

export default HomeAd