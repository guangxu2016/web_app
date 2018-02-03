import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from "../../../components/HomeAd/index"
import { getAdData } from '../../../fetch/home/home'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const result = getAdData()
        // console.log(result)
        result.then(res=>{
            return res.json()
        }).then(json=>{
            // console.log(json)
            const data = json;
            if(data.length) {
                this.setState({
                    data:data
                })
            }
        })
    }
    render() {
        return (
            <div style={{marginTop:"15px"}}>
                {
                    this.state.data.length
                    ? <HomeAd data={this.state.data} />
                    : <div>加载中。。。。</div>
                }
            </div>
        )
    }
}

export default Ad