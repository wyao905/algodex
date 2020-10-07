import { combineReducers } from 'redux'
import sortingReducer from './sortingManager'

const rootReducer = combineReducers({
    sortingGraph: sortingReducer,
    visualRun: visualRunReducer
})

export default rootReducer

function visualRunReducer(state = false, action) {
    switch(action.type) {
        case 'START':
            return true
        case 'STOP':
            return false
        default:
            return state
    }
}