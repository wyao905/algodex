export const updateGrid = (instruction) => {
    return instruction
}

export const initialGrid = (grid) => {
    return {
        type: 'SET_INITIAL_GRID',
        grid: grid
    }
}

export const resetGrid = () => {
    return {
        type: 'RESET_GRID'
    }
}

export const setDirection = (direction) => {
    return {
        type: 'SET_DIRECTION_GRID',
        direction: direction
    }
}

export const setPointA = (coord, direction) => {
    return {
        type: 'SET_POINT_A_GRID',
        coord: coord,
        direction: direction
    }
}

export const setPointB = (coord, direction) => {
    return {
        type: 'SET_POINT_B_GRID',
        coord: coord,
        direction: direction
    }
}

export const closeBox = (coord) => {
    return {
        type: 'CLOSE_GRID',
        coord: coord
    }
}

export const openBox = (coord) => {
    return {
        type: 'OPEN_GRID',
        coord: coord
    }
}