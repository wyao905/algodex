import React from 'react'
import { connect } from 'react-redux'
import { runAlgo, stopAlgo } from '../actions/generalActions'

function SortingOptions(props) {
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!props.isRunning) {
            props.runAlgo()
        }
    }

    console.log(props.isRunning)

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <label>Select Number of ELements (Between 1 and 20)</label>
            <input type='number' min='1' max='20'/>
            <input type='submit' value='Start' disabled={props.isRunning}></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.visualRun
    }
}

const mapDispatchToProps = dispatch => {
    return {
        runAlgo: () => dispatch(runAlgo()),
        stopAlgo: () => dispatch(stopAlgo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions)