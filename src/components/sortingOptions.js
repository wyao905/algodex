import React, { useState } from 'react'
import { connect } from 'react-redux'
import { initialArray } from '../actions/sortingActions'
import { runAlgo, setIncomplete } from '../actions/generalActions'

function SortingOptions(props) {
    const [arrSize, setArrSize] = useState(1)
    let initArr = []

    const setInitArr = (e) => {
        setArrSize(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        for(let i = 0; i < arrSize; i++) {
            initArr.push(Math.floor(Math.random() * 49 + 1))
        }
        props.setInitialArr(initArr)
        props.setIncomplete()
    }

    const startGraph = () => {
        props.runAlgo()
    }

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Select Number of ELements (Between 1 and 20)</label>
                <input type='number' min='1' max='20' onChange={e => setInitArr(e)} value={arrSize} disabled={props.isRunning}/>
                <input type='submit' value='Generate' disabled={props.isRunning}></input>
            </form>
            <button onClick={() => startGraph()} disabled={props.isRunning}>Start</button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions)