import { combineReducers } from 'redux'
import { sortingReducer, initialArrayReducer } from './sortingManager'

const rootReducer = combineReducers({
    sortingGraph: sortingReducer,
    initialArr: initialArrayReducer,
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