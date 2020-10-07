import React from 'react'
import { connect } from 'react-redux'

function GraphBars(props) {
    let displayGraphBars = () => {
        return props.graph.map((element) => {
            return <div style={{display: 'flex'}}>
                <div style={{margin: 5 + 'px',
                            width: (element.value * 10 + 5) + 'px',
                            height: 20 + 'px',
                            backgroundColor: element.color}}>
                </div>
                <p style={{fontSize: 15 + 'px',
                            textAlign: 'left',
                            margin: 3 + 'px',
                            verticalAlign: 'center'}}>
                    {element.value}
                </p>
            </div>
        })
    }

    return(
        <div>
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