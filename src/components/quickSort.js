import React from 'react'
import { connect } from 'react-redux'
import { Spring } from 'react-spring/renderprops'
import GraphBars from './graphBars'
import { updateGraph } from '../actions/sortingActions'

function QuickSort(props) {
    let graphObjs = props.arr.map((e) => {
        return {
            value: e,
            color: 'rgb(200, 200, 200)'
        }
    })

    const instructions = []

    instructions.push({type: 'INITIALIZE', value: [...graphObjs]})

    let quickSort = (arr, low, high) => {
        instructions.push({type: 'SECTION', value: [low, high]})
        instructions.push({type: 'RESET', value: [low, high]})
        if(low < high) {
            let pi = partition(arr, low, high)
    
            quickSort(arr, low, pi - 1)
            quickSort(arr, pi + 1, high)
        }
    }
    
    let partition = (arr, low, high) => {
        let pivot = arr[high]
        instructions.push({type: 'HLIGHT_PIVOT', value: [high]})
        
        let i = (low - 1)
    
        for(let j = low; j <= high - 1; j++) {
            instructions.push({type: 'HLIGHT', value: [j]})
            if(arr[j].value < pivot.value) {
                i++
                instructions.push({type: 'HLIGHT', value: [i]})
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                instructions.push({type: 'SWAP', value: [i, j]})
            }
            if(i >= 0) {
                instructions.push({type: 'RESET_HLIGHT', value: [i, j]})
            } else {
                instructions.push({type: 'RESET_HLIGHT', value: [j]})
            }
        }
    
        arr[high] = arr[i + 1]
        arr[i + 1] = pivot
        instructions.push({type: 'HLIGHT', value: [i + 1]})
        instructions.push({type: 'HLIGHT', value: [high]})
        instructions.push({type: 'SWAP', value: [i + 1, high]})
        instructions.push({type: 'RESET_HLIGHT', value: [i + 1, high]})
        instructions.push({type: 'RESET'})
        return (i + 1)
    }

    const dispatchInstructions = () => {
        for(let i = 0; i < instructions.length; i++) {
            setTimeout(() => props.updateGraph(instructions[i]), 50 * i)
        }
    }

    return(
        <div>
            <Spring
                from={{opacity: 0, marginLeft: -500}}
                to={{opacity: 1, marginLeft: 100}}
                config={{duration: 1000}}>
                {props => (
                    <div style={props}>
                        <h3>Quick Sort</h3>
                    </div>
                    )
                }
            </Spring>
            {quickSort(graphObjs, 0, graphObjs.length - 1)}
            {dispatchInstructions()}
            <GraphBars/>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateGraph: (instruction) => dispatch(updateGraph(instruction))
    }
}

export default connect(null, mapDispatchToProps)(QuickSort)