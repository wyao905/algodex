import React from 'react'
import { connect } from 'react-redux'
import GraphBars from '../graphBars'
import { updateGraph } from '../../actions/sortingActions'
import { stopAlgo, setComplete } from '../../actions/generalActions'

function QuickSort(props) {
    console.log(props.arr)
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
                if(i !== j) {
                    instructions.push({type: 'HLIGHT', value: [i]})
                }
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
        if(props.isRunning) {
            for(let i = 0; i < instructions.length; i++) {
                setTimeout(() => props.updateGraph(instructions[i]), 200 * i)
            }
            setTimeout(() => props.stopAlgo(), 200 + (instructions.length * 200))
            props.setComplete()
        }
    }

    return(
        <div>
            {quickSort(graphObjs, 0, graphObjs.length - 1)}
            {dispatchInstructions()}
            <GraphBars/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.visualRun,
        arr: state.initialArr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateGraph: (instruction) => dispatch(updateGraph(instruction)),
        stopAlgo: () => dispatch(stopAlgo()),
        setComplete: () => dispatch(setComplete())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickSort)