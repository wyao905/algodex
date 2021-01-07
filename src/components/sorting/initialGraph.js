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
            return <div style={{
                margin: '1px',
                width: (element.value * 5 + 10) + 'px',
                height: '4px',
                backgroundColor: element.color
            }}>
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
        graph: state.initialArr
    }
}

export default connect(mapStateToProps, null)(InitialGraph)