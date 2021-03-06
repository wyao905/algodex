import { combineReducers } from 'redux'
import { sortingReducer, initialArrayReducer } from './sortingManager'
import { pathingReducer, directionReducer, initialGridReducer, pointAReducer, pointBReducer } from './pathingManager'

const rootReducer = combineReducers({
    sortingGraph: sortingReducer,
    initialArr: initialArrayReducer,
    pathingGrid: pathingReducer,
    direction: directionReducer,
    initialGrid: initialGridReducer,
    pointA: pointAReducer,
    pointB: pointBReducer,
    visualRun: visualRunReducer,
    visualRunState: visualRunStateReducer,
    currentAlgo: currentAlgoReducer
})

export default rootReducer

function visualRunReducer(state = false, action) {
    switch(action.type) {
        case 'START':
            return true
        case 'STOP':
            return false
        case 'RESET_ALGO':
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
        case 'RESET_ALGO':
            return false
        default:
            return state
    }
}

function currentAlgoReducer(state = {category: null, algo: null}, action) {
    switch(action.type) {
        case 'SET_ALGO':
            return {
                category: action.category,
                algo:action.algo
            }
        default:
            return state
    }
}