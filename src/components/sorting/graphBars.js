import React from 'react'
import { connect } from 'react-redux'

function GraphBars(props) {
    const displayGraphBars = () => {
        return props.graph.map((element) => {
            return <div >
                <div style={{
                    margin: '1px',
                    width: (element.value * 5 + 10) + 'px',
                    height: '4px',
                    backgroundColor: element.color
                }}>
                </div>
            </div>
        })
    }

    return (
        <div style={{
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {displayGraphBars()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        graph: state.sortingGraph
    }
}

export default connect(mapStateToProps, null)(GraphBars)