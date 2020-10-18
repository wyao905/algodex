import React, { useState } from 'react'
import { connect } from 'react-redux'
import { initialArray } from '../actions/sortingActions'
import { runAlgo, setIncomplete } from '../actions/generalActions'

function PathingOptions(props) {
    return(
        <p>dfdfdf</p>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.visualRun
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setInitialArr: (arr) => dispatch(initialArray(arr)),
        runAlgo: () => dispatch(runAlgo()),
        setIncomplete: () => dispatch(setIncomplete())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PathingOptions)