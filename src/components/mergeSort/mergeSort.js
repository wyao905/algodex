import React from 'react'
import { connect } from 'react-redux'
import GraphBars from '../graphBars'
import { updateGraph } from '../../actions/sortingActions'
import { stopAlgo, setComplete } from '../../actions/generalActions'

function MergeSort(props) {
    let graphObjs = props.arr.map((e) => {
        return {
            value: e,
            color: 'rgb(200, 200, 200)'
        }
    })

    const instructions = []

    instructions.push({type: 'INITIALIZE', value: [...graphObjs]})

    let mergeSort = (graph) => {
        // instructions.push({type: 'SECTION', value: [low, high]})
        if(graph.length <= 1) {
            return graph
        } else {
            let pi = Math.floor(graph.length/2)
            console.log(graph)
            let graphOne = graph.slice(0, pi)
            let graphTwo = graph.slice(pi)

            return merge(mergeSort(graphOne), mergeSort(graphTwo))
        }
        // instructions.push({type: 'RESET', value: [low, high]})
    }
    
    let merge = (graphOne, graphTwo) => {
        let mergedGraph = []
        // instructions.push({type: 'HLIGHT_PIVOT', value: [high]})
    
        while(graphOne.length > 0 && graphTwo.length > 0) {
            // instructions.push({type: 'HLIGHT', value: [j]})
            if(graphOne[0].value > graphTwo[0].value) {
                mergedGraph.push(graphTwo.shift())
                // instructions.push({type: 'HLIGHT', value: [i]})
                // instructions.push({type: 'SWAP', value: [i, j]})
            } else {
                mergedGraph.push(graphOne.shift())
            }
                // instructions.push({type: 'RESET_HLIGHT', value: [i, j]})
                // instructions.push({type: 'RESET_HLIGHT', value: [j]})
        }
    
        if(graphOne.length > 0) {
            mergedGraph.push(graphOne[0])
        } else if(graphTwo.length > 0) {
            mergedGraph.push(graphTwo[0])
        }
        // instructions.push({type: 'HLIGHT', value: [i + 1]})
        // instructions.push({type: 'HLIGHT', value: [high]})
        // instructions.push({type: 'SWAP', value: [i + 1, high]})
        // instructions.push({type: 'RESET_HLIGHT', value: [i + 1, high]})
        // instructions.push({type: 'RESET'})
        return mergedGraph
    }

    // const dispatchInstructions = () => {
    //     if(props.isRunning) {
    //         for(let i = 0; i < instructions.length; i++) {
    //             setTimeout(() => props.updateGraph(instructions[i]), 100 * i)
    //         }
    //         setTimeout(() => props.stopAlgo(), 100 + (instructions.length * 100))
    //         props.setComplete()
    //     }
    // }

    return(
        <div>
            {() => {mergeSort(graphObjs)}}
            {/* {dispatchInstructions()} */}
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

export default connect(mapStateToProps, mapDispatchToProps)(MergeSort)