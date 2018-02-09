import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//获取信息数据
import { getInfoData } from '../../../fetch/detail/detai'
import DetailInfo from '../../../components/DetailInfo'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div>
                {
                    // this.props.id        商品id
                    this.state.info
                    ? <DetailInfo data={this.state.info}/>
                    : ''

                }
            </div>
        )
    }
    // componentDidMount() {
    //     const id = this.props.id
    //     const result = getInfoData(id)
    //     result.then(res=>{
    //         return res.json()
    //     }).then(json=>{
    //         this.setState({
    //             info:json
    //         })
    //     })
    // }
    componentDidMount() {
        // 获取商户信息
        this.getInfo()
    }
    getInfo() {
        const id = this.props.id
        const result = getInfoData(id)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                info: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页，获取商户信息出错')
            }
        })
    }
}

export default Info