export function pathingReducer(state = [], action) {
    let updatedPoint
    let i
    let j
    switch(action.type) {
        case 'INITIALIZE_GRID':
            return action.value
        case 'VISIT_BOX_GRID':
            i = action.value[0]
            j = action.value[1]
            updatedPoint = state[i][j]
            if(updatedPoint.color === 'white') {
                updatedPoint.color = 'cyan'
                return [...state.slice(0, i),
                    [...state[i].slice(0, j),
                    updatedPoint,
                    ...state[i].slice(j + 1)],
                    ...state.slice(i + 1)]
            } else {
                return state
            }
        case 'DRAW_PATH_GRID':
            i = action.value[0]
            j = action.value[1]
            updatedPoint = state[i][j]
            if(updatedPoint.color === 'cyan') {
                updatedPoint.color = 'blue'
                return [...state.slice(0, i),
                    [...state[i].slice(0, j),
                    updatedPoint,
                    ...state[i].slice(j + 1)],
                    ...state.slice(i + 1)]
            } else {
                return state
            }
        case 'RESET_GRID':
            return []
        case 'RESET_ALGO':
            return []
        default:
            return state
    }
}

export function initialGridReducer(state = [], action) {
    let updatedPoint
    let updatedPointA
    let updatedPointB
    let i
    let j
    switch(action.type) {
        case 'SET_INITIAL_GRID':
            return [...action.grid]
        case 'SET_POINT_A_GRID':
            i = action.coord[0]
            j = action.coord[1]
            updatedPointA = state[i][j]
            if(action.direction === 'Uni') {
                updatedPointA.color = 'yellow'
            } else {
                updatedPointA.color = 'purple'
            }
            return [...state.slice(0, i),
                    [...state[i].slice(0, j),
                     updatedPointA,
                     ...state[i].slice(j + 1)],
                    ...state.slice(i + 1)]
        case 'SET_POINT_B_GRID':
            i = action.coord[0]
            j = action.coord[1]
            updatedPointB = state[i][j]
            if(action.direction === 'Uni') {
                updatedPointB.color = 'green'
            } else {
                updatedPointB.color = 'purple'
            }
            return [...state.slice(0, i),
                    [...state[i].slice(0, j),
                     updatedPointB,
                     ...state[i].slice(j + 1)],
                    ...state.slice(i + 1)]
        case 'CLOSE_GRID':
            i = action.coord[0]
            j = action.coord[1]
            updatedPoint = state[i][j]
            updatedPoint.color = 'black'
            updatedPoint.open = false
            return [...state.slice(0, i),
                [...state[i].slice(0, j),
                 updatedPoint,
                 ...state[i].slice(j + 1)],
                ...state.slice(i + 1)]
        case 'OPEN_GRID':
            i = action.coord[0]
            j = action.coord[1]
            updatedPoint = state[i][j]
            updatedPoint.color = 'white'
            updatedPoint.open = true
            return [...state.slice(0, i),
                [...state[i].slice(0, j),
                 updatedPoint,
                 ...state[i].slice(j + 1)],
                ...state.slice(i + 1)]
        case 'RESET_GRID':
            for(let a = 0; a < state.length; a++) {
                for(let b = 0; b < state[a].length; b++) {
                    state[a][b].color = 'white'
                    state[a][b].open = true
                }
            }
            return state
        case 'RESET_ALGO':
            return []
        default:
            return state
    }
}

export function directionReducer(state = null, action) {
    switch(action.type) {
        case 'SET_DIRECTION_GRID':
            return action.direction
        case 'RESET_ALGO':
            return null
        default:
            return state
    }
}

export function pointAReducer(state = null, action) {
    switch(action.type) {
        case 'SET_POINT_A_GRID':
            return [...action.coord]
        case 'SET_INITIAL_GRID':
            return null
        case 'RESET_GRID':
            return null
        case 'RESET_ALGO':
            return null
        default:
            return state
    }
}

export function pointBReducer(state = null, action) {
    switch(action.type) {
        case 'SET_POINT_B_GRID':
            return [...action.coord]
        case 'SET_INITIAL_GRID':
            return null
        case 'RESET_GRID':
            return null
        case 'RESET_ALGO':
            return null
        default:
            return state
    }
}