import React from 'react'
import { connect } from 'react-redux'

function GridBlocks(props) {
    const displayRow = (row, rowId) => {
        return row.map((element, colId) => {
            return <div id={rowId + ',' + colId}
                className='grid'
                style={{
                    marginLeft: '1px',
                    position: 'relative',
                    width: '2%',
                    border: 'solid 1px rgb(200, 200, 200)',
                    backgroundColor: element.color
                }}>
            </div>
        })
    }

    const displayGridBlocks = () => {
        return props.grid.map((row, rowId) => {
            return <div style={{ display: 'flex' }}>
                {displayRow(row, rowId)}
            </div>
        })
    }

    const displayPathingVisual = () => {
        return <div style={{
            border: 'solid #314455 4px'
        }}>
            {displayGridBlocks()}
        </div>
    }

    return (
        displayPathingVisual()
    )
}

const mapStateToProps = state => {
    return {
        grid: state.pathingGrid
    }
}

export default connect(mapStateToProps, null)(GridBlocks)