import * as actionTypes from "../constants/store.js"

const initialState = []
export default function store(state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            state.unshift(action.data)
            return state
        case actionTypes.STORE_RM:
            return state.filter(item => {
                //商品id不等于当前删除id  返回item
                if (item.id !== action.data.id) {
                    return item
                }
            })
        default:
            return state
    }
}
