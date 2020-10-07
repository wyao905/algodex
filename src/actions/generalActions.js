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