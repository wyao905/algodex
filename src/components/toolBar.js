import React from 'react'
import Select from 'react-select'
import { Spring } from 'react-spring/renderprops'
import SortingOptions from './sortingOptions'

const sortingOptions = [
    { value: 'quickSort', label: 'Quick Sort' },
    { value: 'mergeSort', label: 'Merge Sort' }
]

const traversalOptions = [
    { value: 'aStar', label: 'A*' }
]

const groupedOptions = [
    {
        label: 'Sorting Algorithms',
        options: sortingOptions
    },
    {
        label: 'Traversal Algorithms',
        options: traversalOptions
    }
]

function QuickSort(props) {
    return(
        <div>
            <Select defaultValue={sortingOptions[0]} options={groupedOptions}/>
            <SortingOptions/>
        </div>
    )
}

export default QuickSort