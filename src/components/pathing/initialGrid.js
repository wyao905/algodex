import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setPointA, setPointB, closeBox, openBox } from '../../actions/pathingActions'

function InitialGraph(props) {
    const [clicked, setClicked] = useState(false)

    const getGridCoord = (gridId) => {
        return gridId.split(',').map(i => parseInt(i))
    }

    const handleDragStart = (e) => {
        e.preventDefault()
    }

    const handleHover = (e) => {
        e.target.style.filter = 'brightness(75%)'
    }

    const handleMouseLeave = (e) => {
        e.target.style.filter = 'brightness(100%)'
    }

    const handleMouseEnter = (e) => {
        if(clicked) {
            if(e.target.style.backgroundColor === 'white') {
                let coord = getGridCoord(e.target.id)
                props.closeBox(coord)
            }
        }
    }

    const handleMouseDown = (e) => {
        if(!!props.pointA && !!props.pointB) {
            setClicked(true)
        }
    }

    const handleMouseUp = (e) => {
        setClicked(false)
    }

    const handleClick = (e) => {
        let coord = getGridCoord(e.target.id)
        if(props.direction === 'Uni') {
            if(!props.pointA) {
                props.setPointA(coord, props.direction)
            } else if(!!props.pointA && !props.pointB) {
                props.setPointB(coord, props.direction)
            } else {
                if(e.target.style.backgroundColor === 'white') {
                    props.closeBox(coord)
                } else if(e.target.style.backgroundColor === 'black') {
                    props.openBox(coord)
                }
            }
        } else {
            if(!props.pointA) {
                props.setPointA(coord, props.direction)
            } else if(!!props.pointA && !props.pointB) {
                props.setPointB(coord, props.direction)
            } else {
                if(e.target.style.backgroundColor === 'white') {
                    props.closeBox(coord)
                } else if(e.target.style.backgroundColor === 'black') {
                    props.openBox(coord)
                }
            }
        }
    }

    const displayRow = (row, rowId) => {
        return row.map((element, colId) => {
            return <div id={rowId + ',' + colId}
                        style={{width: 20 + 'px',
                                height: 20 + 'px',
                                border: 'solid',
                                borderWidth: 1 + 'px',
                                borderColor: 'rgb(200, 200, 200)',
                                backgroundColor: element.color}}
                        onDragStart={e => handleDragStart(e)}
                        onMouseOver={e => handleHover(e)}
                        onMouseLeave={e => handleMouseLeave(e)}
                        onMouseEnter={e => handleMouseEnter(e)}
                        onMouseDown={e => handleMouseDown(e)}
                        onMouseUp={e => handleMouseUp(e)}
                        onClick={e => handleClick(e)}>
            </div>
        })
    }

    const displayGrid = () => {
        return props.grid.map((row, rowId) => {
            return <div style={{display: 'flex'}}>
                {displayRow(row, rowId)}
            </div>
        })
    }

    const displayPathingVisual = () => {
        if(!!props.direction) {
            return <div style={{position: 'absolute',
                                width: 1000 + 'px',
                                left: 50 + '%',
                                top: 25 + '%',
                                marginLeft: -500 + 'px',
                                border: 'solid',
                                borderWidth: 3 + 'px'}}>
                {displayGrid()}
            </div>
        } else {
            return null
        }
    }

    return(
        displayPathingVisual()
    )
}

const mapStateToProps = state => {
    return {
        grid: state.initialGrid,
        direction: state.direction,
        pointA: state.pointA,
        pointB: state.pointB
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPointA: (coord, direction) => dispatch(setPointA(coord, direction)),
        setPointB: (coord, direction) => dispatch(setPointB(coord, direction)),
        openBox: (coord) => dispatch(openBox(coord)),
        closeBox: (coord) => dispatch(closeBox(coord))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialGraph)