import { combineReducers } from 'redux'
import quickSortReducer from './quickSortManager'

const rootReducer = combineReducers({
    quickSortGraph: quickSortReducer
})

export default rootReducer