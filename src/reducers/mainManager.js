import { combineReducers } from 'redux'
import sortingReducer from './sortingManager'

const rootReducer = combineReducers({
    sortingGraph: sortingReducer
})

export default rootReducer
