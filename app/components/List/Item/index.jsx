import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { Link } from 'react-router'

import './style.less'

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="list-item clear-fix">
                {data.title}
            </div>
        )
    }
}

export default ListItem