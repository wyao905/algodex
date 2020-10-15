export const runAlgo = () => {
    return {
        type: 'START'
    }
}

export const stopAlgo = () => {
    return {
        type: 'STOP'
    }
}

export const setComplete = () => {
    return {
        type: 'COMPLETE'
    }
}

export const setIncomplete = () => {
    return {
        type: 'INCOMPLETE'
    }
}

export const setAlgo = (algo) => {
    return {
        type: 'SET_ALGO',
        category: algo.category,
        algo: algo.name
    }
}

export const resetAlgo = () => {
    return {
        type: 'RESET_ALGO'
    }
}