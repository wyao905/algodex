import React from 'react'
import { connect } from 'react-redux'
import QuickSort from './quickSort/quickSort'
import InitialGraph from './initialGraph'

function Visualizer(props) {
    const showVisual = () => {
        if(props.isRunning || props.completed) {
            return <QuickSort/>
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
        initArray: state.initialArr
    }
}

export default connect(mapStateToProps, null)(Visualizer)