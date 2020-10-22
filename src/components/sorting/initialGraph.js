import React from 'react'
import { connect } from 'react-redux'

function InitialGraph(props) {
    let graphObjs = props.graph.map((e) => {
        return {
            value: e,
            color: 'rgb(200, 200, 200)'
        }
    })

    const displayGraphBars = () => {
        return graphObjs.map((element) => {
            return <div>
                <div>
                    <div style={{margin: 1 + 'px',
                                 width: (element.value * 5 + 10) + 'px',
                                 height: (Math.floor(600 / graphObjs.length - 2)) + 'px',
                                 backgroundColor: element.color}}>
                    </div>
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
        graph: state.initialArr
    }
}

export default connect(mapStateToProps, null)(InitialGraph)