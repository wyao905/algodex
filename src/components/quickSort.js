import React from 'react'
import {Spring} from 'react-spring/renderprops'
import GraphBars from './graphBars'

const graphInstructions = []

export default function QuickSort(props) {
    let arrObjs = props.arr.map((e) => {
        return {
            value: e,
            color: 'rgb(200, 200, 200)'
        }
    })

    let initArr = [...arrObjs]

    return(
        <div>
            <Spring
                from={{opacity: 0, marginLeft: -500}}
                to={{opacity: 1, marginLeft: 100}}
                config={{duration: 1000}}>
                {props => (
                    <div style={props}>
                        <h3>Quick Sort</h3>
                    </div>
                    )
                }
            </Spring>
            {quickSort(arrObjs, 0, arrObjs.length - 1)}
            <GraphBars instructions={graphInstructions} arrObjs={initArr}/>
        </div>
    )
}

function updateGraphInstructions(instruction) {
    graphInstructions.push(instruction)
}

function quickSort(arr, low, high) {
    updateGraphInstructions({action: 'SECTION', index: [low, high]})
    if (low < high) {
        let pi = partition(arr, low, high)

        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
    }
}

function partition (arr, low, high) {
    let pivot = arr[high]
    updateGraphInstructions({action: 'HLIGHT_PIVOT', index: [high]})
    
    let i = (low - 1)

    for(let j = low; j <= high - 1; j++) {
        updateGraphInstructions({action: 'HLIGHT', index: [j]})
        if(arr[j].value < pivot.value) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            updateGraphInstructions({action: 'SWAP', index: [i, j]})
        }
    }

    arr[high] = arr[i + 1]
    arr[i + 1] = pivot
    updateGraphInstructions({action: 'SWAP', index: [i + 1, high]})
    updateGraphInstructions({action: 'RESET', index: []})
    return (i + 1)
}