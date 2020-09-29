import React from 'react'
import {Spring} from 'react-spring/renderprops'

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

let arr = [3,9,1,2,5,2,4,6,5,7,4,3,4,5,6,7,8,9,0,9,7,6,2,4]

function quickSort(arr, low, high) {
    console.log(low, high, low < high)
    if (low < high) {
        let pi = partition(arr, low, high)

        console.log('first half:', arr, low, pi - 1)
        quickSort(arr, low, pi - 1)
        console.log('second half:', arr, pi + 1, high)
        quickSort(arr, pi + 1, high)
    }

    return arr.map((num) => {
        return <div>{num}</div>
    })
}

function partition (arr, low, high)
{
    console.log('pivot:', arr[high])
    let pivot = arr[high]
 
    let i = (low - 1)

    for(let j = low; j <= high - 1; j++) {
        console.log('comparing:', arr[j], ', ', pivot)
        if(arr[j] < pivot) {
            i++
            let temp = arr[i]
            console.log('swapping:', arr[i], ', ', arr[j])
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

    console.log('pivot swapping:', arr[high], ', ', arr[i + 1])
    console.log('pivot index:', i + 1)
    arr[high] = arr[i + 1]
    arr[i + 1] = pivot
    return (i + 1)
}