import React from 'react'
import { connect } from 'react-redux'
import QuickSort from './sorting/quickSort'
import MergeSort from './sorting/mergeSort'
import Dijkstras from './pathing/dijkstras'
import InitialGraph from './sorting/initialGraph'

function Visualizer(props) {
    const showVisual = () => {
        if(props.isRunning || props.completed) {
            // switch between display here depending on current algo selected
            if(props.currentAlgo.category === 'sort') {
                if(props.currentAlgo.algo === 'quick') {
                    return <QuickSort/>
                } else if(props.currentAlgo.algo === 'merge') {
                    return <MergeSort/>
                }
            } else {
                if(props.currentAlgo.algo === 'dijkstras') {
                    return <Dijkstras/>
                }
            }
        } else {
            return <InitialGraph/>
        }
    }

    return(
        <div>
            {showVisual()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.visualRun,
        completed: state.visualRunState,
        currentAlgo: state.currentAlgo
    }
}

export default connect(mapStateToProps, null)(Visualizer)