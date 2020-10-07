function sortingReducer(state = [], action) {
    // console.log(state)
    let updatedBars
    let updatedBarA
    let updatedBarB
    let updatedBar
    switch(action.type) {
        case 'INITIALIZE':
            return action.value
        case 'SECTION':
            if(action.value[0] <= action.value[1]) {
                updatedBars = state.slice(action.value[0], action.value[1] + 1)
                updatedBars.forEach((bar) => {
                    bar.color = 'yellow'
                })
    
                return [
                    ...state.slice(0, action.value[0]),
                    ...updatedBars,
                    ...state.slice(action.value[1] + 1)
                ]
            } else {
                return state
            }
        case 'HLIGHT_PIVOT':
            updatedBar = state[action.value[0]]
            updatedBar.color = 'blue'

            return [
                ...state.slice(0, action.value[0]),
                updatedBar,
                ...state.slice(action.value[0] + 1)
            ]
        case 'HLIGHT':
            updatedBar = state[action.value[0]]
            updatedBar.color = 'orange'

            return [
                ...state.slice(0, action.value[0]),
                updatedBar,
                ...state.slice(action.value[0] + 1)
            ]
        case 'RESET_HLIGHT':
            if((action.value.length === 2) && (action.value[0] !== action.value[1])) {
                updatedBarA = state[action.value[0]]
                updatedBarB = state[action.value[1]]
                updatedBarA.color = 'rgb(200, 200, 200)'
                updatedBarB.color = 'rgb(200, 200, 200)'

                return [
                    ...state.slice(0, action.value[0]),
                    updatedBarA,
                    ...state.slice(action.value[0] + 1, action.value[1]),
                    updatedBarB,
                    ...state.slice(action.value[1] + 1)
                ]
            } else {
                updatedBar = state[action.value[0]]
                updatedBar.color = 'rgb(200, 200, 200)'
                
                return [
                    ...state.slice(0, action.value[0]),
                    updatedBar,
                    ...state.slice(action.value[0] + 1)
                ]
            }
        case 'RESET':
            let resetGraph = [...state]
            resetGraph.forEach((bar) => {
                bar.color = 'rgb(200, 200, 200)'
            })

            return [...resetGraph]
        case 'SWAP':
            if(action.value[0] !== action.value[1]) {
                updatedBarA = state[action.value[0]]
                updatedBarB = state[action.value[1]]
                let temp = updatedBarA.value
                updatedBarA.value = updatedBarB.value
                updatedBarB.value = temp
    
                return [
                    ...state.slice(0, action.value[0]),
                    updatedBarA,
                    ...state.slice(action.value[0] + 1, action.value[1]),
                    updatedBarB,
                    ...state.slice(action.value[1] + 1)
                ]
            } else {
                return state
            }
        default:
            return state
    }
}

export default sortingReducer