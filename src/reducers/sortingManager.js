function sortingReducer(state = [], action) {
    // console.log(state)
    let updatedBars
    let updatedBarA
    let updatedBarB
    let updatedBar
    switch(action.type) {
        case 'INITIALIZE':
            console.log(action.type, "||", action.value)
            console.log(action.value)
            return action.value
        case 'SECTION':
            console.log(action.type, "||", action.value)
            if(action.value[0] <= action.value[1]) {
                updatedBars = state.slice(action.value[0], action.value[1] + 1)
                updatedBars.forEach((bar) => {
                    bar.color = 'yellow'
                    console.log(bar)
                })
                console.log([
                    ...state.slice(0, action.value[0]),
                    ...updatedBars,
                    ...state.slice(action.value[1] + 1)
                ], "--", updatedBars)
    
                return [
                    ...state.slice(0, action.value[0]),
                    ...updatedBars,
                    ...state.slice(action.value[1] + 1)
                ]
            } else {
                console.log(state)
                return state
            }
        case 'HLIGHT_PIVOT':
            console.log(action.type, "||", action.value)
            updatedBar = state[action.value[0]]
            updatedBar.color = 'blue'
            console.log([
                ...state.slice(0, action.value[0]),
                updatedBar,
                ...state.slice(action.value[0] + 1)
            ])

            return [
                ...state.slice(0, action.value[0]),
                updatedBar,
                ...state.slice(action.value[0] + 1)
            ]
        case 'HLIGHT':
            console.log(action.type, "||", action.value)
            updatedBar = state[action.value[0]]
            updatedBar.color = 'orange'
            console.log([
                ...state.slice(0, action.value[0]),
                updatedBar,
                ...state.slice(action.value[0] + 1)
            ])

            return [
                ...state.slice(0, action.value[0]),
                updatedBar,
                ...state.slice(action.value[0] + 1)
            ]
        case 'RESET_HLIGHT':
            console.log(action.type, "||", action.value)
            if((action.value.length === 2) && (action.value[0] !== action.value[1])) {
                updatedBarA = state[action.value[0]]
                updatedBarB = state[action.value[1]]
                updatedBarA.color = 'rgb(200, 200, 200)'
                updatedBarB.color = 'rgb(200, 200, 200)'
                console.log([
                    ...state.slice(0, action.value[0]),
                    updatedBarA,
                    ...state.slice(action.value[0] + 1, action.value[1]),
                    updatedBarB,
                    ...state.slice(action.value[1] + 1)
                ])

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
                console.log([
                    ...state.slice(0, action.value[0]),
                    updatedBar,
                    ...state.slice(action.value[0] + 1)
                ])
                
                return [
                    ...state.slice(0, action.value[0]),
                    updatedBar,
                    ...state.slice(action.value[0] + 1)
                ]
            }
        case 'RESET':
            console.log(action.type, "||", action.value)
            let resetGraph = [...state]
            resetGraph.forEach((bar) => {
                bar.color = 'rgb(200, 200, 200)'
            })
            console.log([...resetGraph])

            return [...resetGraph]
        case 'SWAP':
            console.log(action.type, "||", action.value)
            if(action.value[0] !== action.value[1]) {
                updatedBarA = state[action.value[0]]
                updatedBarB = state[action.value[1]]
                let temp = updatedBarA.value
                updatedBarA.value = updatedBarB.value
                updatedBarB.value = temp
                console.log([
                    ...state.slice(0, action.value[0]),
                    updatedBarA,
                    ...state.slice(action.value[0] + 1, action.value[1]),
                    updatedBarB,
                    ...state.slice(action.value[1] + 1)
                ])
    
                return [
                    ...state.slice(0, action.value[0]),
                    updatedBarA,
                    ...state.slice(action.value[0] + 1, action.value[1]),
                    updatedBarB,
                    ...state.slice(action.value[1] + 1)
                ]
            } else {
                console.log(state)
                return state
            }
        default:
            return state
    }
}

export default sortingReducer