import React from 'react'
import {Spring} from 'react-spring/renderprops'

export default function QuickSort(props) {
    return(
        <Spring
            from={{opacity: 0, marginLeft: -500}}
            to={{opacity: 1, marginLeft: 100}}
            config={{duration: 1000}}
        >
            {props => (
                <div style={props}>
                    <h3>Quick Sort</h3>
                </div>
                )
            }
        </Spring>
    )
}