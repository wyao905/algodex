import React, {useState} from 'react'
import {Spring} from 'react-spring/renderprops'

export default function GraphBar(props) {
    console.log(props.arr)
    return props.arr.map((element) => {
        return <Spring
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
    })
}


