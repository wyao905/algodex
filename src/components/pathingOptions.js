import React, { useState } from 'react'
import { connect } from 'react-redux'
import { initialGrid, setDirection } from '../actions/pathingActions'
import { runAlgo, setIncomplete } from '../actions/generalActions'

function PathingOptions(props) {
    let initGrid

    const createInitGrid = () => {
        let grid = Array(30)
        for(let i = 0; i < grid.length; i++) {
            grid[i] = Array(50)
            for(let j = 0; j < grid[i].length; j++) {
                grid[i][j] = {visited: false, open: true, color: 'white'}
            }
        }

        return grid
    }

    const selectUni = (e) => {
        initGrid = createInitGrid()
        props.setInitialGrid(initGrid)
        props.setDirection('Uni')
    }

    const selectBi = (e) => {
        initGrid = createInitGrid()
        props.setInitialGrid(initGrid)
        props.setDirection('Bi')
    }

    const displayInstruction = () => {
        if(!!props.direction) {
            if(props.direction === 'Uni') {
                if(props.pointA && props.pointB) {
                    return <p>Draw Any Obstructions (Optional)</p>
                } else if(props.pointA && !props.pointB) {
                    return <p>Select End Point</p>
                } else {
                    return <p>Select Start Point</p>
                }
            } else {
                if(props.pointA && props.pointB) {
                    return <p>Draw Any Obstructions (Optional)</p>
                } else if(props.pointA && !props.pointB) {
                    return <p>Select Point B</p>
                } else {
                    return <p>Select Point A</p>
                }
            }
        } else {
            return null
        }
    }

    return(
        <div>
            <button onClick={e => selectUni(e)} disabled={props.direction === 'Uni'}>
                Unidirectional
            </button>
            <button onClick={e => selectBi(e)} disabled={props.direction === 'Bi'}>
                Bidirectional
            </button>
            {displayInstruction()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        direction: state.direction,
        pointA: state.pointA,
        pointB: state.pointB
        // isRunning: state.visualRun
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setInitialGrid: (grid) => dispatch(initialGrid(grid)),
        setDirection: (direction) => dispatch(setDirection(direction))
        // runAlgo: () => dispatch(runAlgo()),
        // setIncomplete: () => dispatch(setIncomplete())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PathingOptions)