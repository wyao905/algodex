import React, {useState} from 'react'

export default function GraphBar(props) {
    return(
        <div style={{margin: 5 + 'px',
                     width: (props.length * 10) + 'px',
                     height: 10 + 'px',
                     'background-color': 'rgb(200, 200, 200)'}}>
        </div>
    )
}