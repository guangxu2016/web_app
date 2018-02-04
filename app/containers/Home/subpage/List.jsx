import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'

// import ListCompoent from '../../../components/List'
// import LoadMore from '../../../components/LoadMore'

import "./list.css";

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    componentDidMount() {
        this.firstPageData()
    }

    firstPageData() {
        //获取首屏数据
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0)
        // console.log(result)
        this.resultHandle(result)
    }
    //数据处理
    resultHandle(result) {
        result.then(res=>{
            return res.json()
        }).then(json=>{
            // console.log(json)
            const hasMore = json.hasMore
            const data = json.data

            this.setState({
                hasMore:hasMore,
                data:data
            })
        })
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢{this.props.cityName}</h2>
                <div>
                    {this.state.hasMore.toString()}
                    {this.state.data.length}
                </div>

            </div>
        )
    }
}

export default List