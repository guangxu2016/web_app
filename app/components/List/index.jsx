import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import ListItem from './Item';

import './list.css';

class ListCompoent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="list-container">
                {
                    data.map((item,index)=>{
                        return <ListItem key={index} data={item} />
                    })
                }

            </div>
        )
    }
}

export default ListCompoent