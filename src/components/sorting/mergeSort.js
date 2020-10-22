import React from 'react'
import { connect } from 'react-redux'
import GraphBars from './graphBars'
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

    const mergeSort = (graph, low, high) => {
        instructions.push({type: 'SECTION_YELLOW', value: [low, high]})
        instructions.push({type: 'RESET'})

        if(graph.length <= 1) {
            return graph
        } else {
            let pi = Math.floor(graph.length/2)
            let graphOne = graph.slice(0, pi)
            instructions.push({type: 'SECTION_CYAN', value: [low, low + graphOne.length - 1]})
            let graphTwo = graph.slice(pi)
            instructions.push({type: 'SECTION_GREEN', value: [high - graphTwo.length + 1, high]})
    
            return merge(mergeSort(graphOne, low, low + graphOne.length - 1), mergeSort(graphTwo, high - graphTwo.length + 1, high), low)
        }
    }
    
    const merge = (graphOne, graphTwo, low) => {
        let mergedGraph = []
        let i = 0
        let bar
    
        while(graphOne.length > 0 && graphTwo.length > 0) {
            if(graphOne[0].value > graphTwo[0].value) {
                bar = graphTwo.shift()
                mergedGraph.push(bar)
                instructions.push({type: 'REPLACE', value: [low + i, bar.value]})
                i++
            } else {
                bar = graphOne.shift()
                mergedGraph.push(bar)
                instructions.push({type: 'REPLACE', value: [low + i, bar.value]})
                i++
            }
        }
    
        if(graphOne.length > 0) {
            while(graphOne.length > 0) {
                bar = graphOne.shift()
                mergedGraph.push(bar)
                instructions.push({type: 'REPLACE', value: [low + i, bar.value]})
                i++
            }
        } else {
            while(graphTwo.length > 0) {
                bar = graphTwo.shift()
                mergedGraph.push(bar)
                instructions.push({type: 'REPLACE', value: [low + i, bar.value]})
                i++
            }
        }

        instructions.push({type: 'RESET'})
        return mergedGraph
    }

    const dispatchInstructions = () => {
        if(props.isRunning) {
            for(let i = 0; i < instructions.length; i++) {
                setTimeout(() => props.updateGraph(instructions[i]), 100 * i)
            }
            setTimeout(() => props.stopAlgo(), 100 + (instructions.length * 100))
            props.setComplete()
        }
    }

    mergeSort(graphObjs, 0, graphObjs.length - 1)
    dispatchInstructions()
    
    return(
        <div>
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