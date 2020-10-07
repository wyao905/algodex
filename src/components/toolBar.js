import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { Spring } from 'react-spring/renderprops'

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
            {/* need to add event listener where on select, depending on what the
            selection is, will set state to sorting*/}
            <Select defaultValue={sortingOptions[0]} options={groupedOptions}/>
            {/* add function where depending on whether state is sorting or traversal,
            will dieplay the correct toolbar */}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(null, mapDispatchToProps)(QuickSort)