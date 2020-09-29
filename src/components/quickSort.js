import React, {useState} from 'react'
import {Spring} from 'react-spring/renderprops'
import GraphBar from './graphBar'

export default function QuickSort(props) {
    return(
        <div>
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
            {quickSort(arr, 0, arr.length - 1)}
        </div>
        
    )
}

let arr = [3,9,1,2,5,2,4,9,0,9,7,6,2,4]

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high)

        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
    }

    return arr.map((num, i) => {
        return <div>
            <GraphBar length={num}/>
        </div>
    })
}

function partition (arr, low, high)
{
    let pivot = arr[high]
    //highlight pivot bar
 
    let i = (low - 1)

    for(let j = low; j <= high - 1; j++) {
        //highlight arr[j] and pivot bar (comparison)
        if(arr[j] < pivot) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            //highlight both bars and swap positions
        }
    }

    arr[high] = arr[i + 1]
    arr[i + 1] = pivot
    //highlight pivot bar and bar at pivot bar's intended position and swap positions
    return (i + 1)
}