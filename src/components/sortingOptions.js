import React, { useState } from 'react'
import { connect } from 'react-redux'
import { initialArray } from '../actions/sortingActions'
import { runAlgo, setIncomplete } from '../actions/generalActions'

function SortingOptions(props) {
    const [arrSize, setArrSize] = useState(1)
    let initArr

    const setInitArr = (e) => {
        setArrSize(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        initArr = []
        for (let i = 0; i < arrSize; i++) {
            initArr.push(Math.floor(Math.random() * 100 + 1))
        }
        props.setInitialArr(initArr)
        props.setIncomplete()
    }

    const startGraph = () => {
        props.runAlgo()
    }

    return (
        <div style={{
            display: 'flex',
            margin: '12px auto 0',
            justifyContent: 'space-between'
        }}>
            <div style={{ display: 'flex' }}>
                <p className='instruction-text'>Select Number of ELements (Between 1 and 100)</p>
                <input type='number'
                    min='1'
                    max='100'
                    style={{ marginLeft: '6px' }}
                    onChange={e => setInitArr(e)} value={arrSize}
                    disabled={props.isRunning} />
            </div>
            <div>
                <button className='button' style={{ marginRight: '6px' }} onClick={e => handleSubmit(e)} disabled={props.isRunning}>Generate</button>
                <button className='button' onClick={() => startGraph()} disabled={props.isRunning}>Start</button>
            </div>
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