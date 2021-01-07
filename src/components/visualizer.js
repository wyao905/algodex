import React from 'react'
import { connect } from 'react-redux'
import QuickSort from './sorting/quickSort'
import MergeSort from './sorting/mergeSort'
import Dijkstras from './pathing/dijkstras'
import InitialGraph from './sorting/initialGraph'
import InitialGrid from './pathing/initialGrid'

function Visualizer(props) {
    if (props.isRunning || props.completed) {
        // switch between display here depending on current algo selected
        if (props.currentAlgo.category === 'sort') {
            if (props.currentAlgo.algo === 'quick') {
                return <div style={divStyle}><QuickSort /></div>
            } else if (props.currentAlgo.algo === 'merge') {
                return <div style={divStyle}><MergeSort /></div>
            }
        } else {
            if (props.currentAlgo.algo === 'dijkstras') {
                return <Dijkstras />
            }
        }
    } else {
        if (props.currentAlgo.category === 'sort') {
            return <div style={divStyle}><InitialGraph /></div>
        } else if (props.currentAlgo.category === 'path') {
            return <InitialGrid />
        } else {
            return null
        }
    }
}

const divStyle = {
    backgroundColor: '#ffffff',
    width: 'auto',
    height: 'auto',
    padding: '24px',
    border: 'solid #314455 4px'
}

const mapStateToProps = state => {
    return {
        isRunning: state.visualRun,
        completed: state.visualRunState,
        currentAlgo: state.currentAlgo
    }
}

export default connect(mapStateToProps, null)(Visualizer)