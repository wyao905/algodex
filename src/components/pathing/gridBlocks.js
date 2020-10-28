import React from 'react'
import { connect } from 'react-redux'

function GridBlocks(props) {
    const displayRow = (row, rowId) => {
        return row.map((element, colId) => {
            return <div id={rowId + ',' + colId}
                        style={{width: 20 + 'px',
                                height: 20 + 'px',
                                border: 'solid',
                                borderWidth: 1 + 'px',
                                borderColor: 'rgb(200, 200, 200)',
                                backgroundColor: element.color}}>
            </div>
        })
    }

    const displayGridBlocks = () => {
        return props.grid.map((row, rowId) => {
            return <div style={{display: 'flex'}}>
                {displayRow(row, rowId)}
            </div>
        })
    }

    const displayPathingVisual = () => {
        return <div style={{position: 'absolute',
                            width: 1000 + 'px',
                            left: 50 + '%',
                            top: 25 + '%',
                            marginLeft: -500 + 'px',
                            border: 'solid',
                            borderWidth: 3 + 'px'}}>
            {displayGridBlocks()}
        </div>
    }

    return(
        displayPathingVisual()
    )
}

const mapStateToProps = state => {
    return {
        grid: state.pathingGrid
    }
}

export default connect(mapStateToProps, null)(GridBlocks)