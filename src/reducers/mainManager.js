import { combineReducers } from 'redux'
import { sortingReducer, initialArrayReducer } from './sortingManager'

const rootReducer = combineReducers({
    sortingGraph: sortingReducer,
    initialArr: initialArrayReducer,
    visualRun: visualRunReducer,
    visualRunState: visualRunStateReducer
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

function visualRunStateReducer(state = false, action) {
    switch(action.type) {
        case 'COMPLETE':
            return true
        case 'INCOMPLETE':
            return false
        default:
            return state
    }
}