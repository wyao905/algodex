import React from 'react'
import { connect } from 'react-redux'
import { Spring } from 'react-spring/renderprops'

function InitialGraph(props) {
    let graphObjs = props.graph.map((e) => {
        return {
            value: e,
            color: 'rgb(200, 200, 200)'
        }
    })

    let displayGraphBars = () => {
        return graphObjs.map((element) => {
            return <div>
                <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}
                config={{duration: 1000}}>
                    {props => (
                        <div style={props}>
                            <div style={{display: 'flex'}}>
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
                        </div>
                    )}
                </Spring>
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
        graph: state.initialArr
    }
}

export default connect(mapStateToProps, null)(InitialGraph)