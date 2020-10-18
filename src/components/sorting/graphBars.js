import React from 'react'
import { connect } from 'react-redux'

function GraphBars(props) {    
    let displayGraphBars = () => {
        return props.graph.map((element) => {
            return <div >
                <div style={{margin: 1 + 'px',
                            width: (element.value * 5 + 10) + 'px',
                            height: (Math.floor(600 / props.graph.length - 2)) + 'px',
                            backgroundColor: element.color}}>
                </div>
            </div>
        })
    }

    return(
        <div style={{height: 600 + 'px'}}>
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