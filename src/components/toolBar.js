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
    const displayToolbarOptions = () => {
        // if state is sorting, display sorting options component,
        // if traversal, display traversal options
    }

    return(
        <div>
            <Select defaultValue={sortingOptions[0]} options={groupedOptions}/>
            <SortingOptions/>
            {/* add function where depending on whether state is sorting or traversal,
            will dieplay the correct toolbar */}
        </div>
    )
}

export default QuickSort