import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initialArray } from '../actions/sortingActions'
import { runAlgo, stopAlgo } from '../actions/generalActions'

function SortingOptions(props) {
    const [arrSize, setArrSize] = useState(1)
    let initArr = []

    const setInitArr = (e) => {
        setArrSize(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!props.isRunning) {
            props.runAlgo()
        }

        for(let i = 0; i < arrSize; i++) {
            initArr.push(Math.floor(Math.random() * 49 + 1))
        }
        props.setInitialArr(initArr)
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <label>Select Number of ELements (Between 1 and 20)</label>
            <input type='number' min='1' max='20' onChange={e => setInitArr(e)} value={arrSize}/>
            <input type='submit' value='Start' disabled={props.isRunning}></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.visualRun,
        initArray: state.initialArr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setInitialArr: (arr) => dispatch(initialArray(arr)),
        runAlgo: () => dispatch(runAlgo()),
        stopAlgo: () => dispatch(stopAlgo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions)