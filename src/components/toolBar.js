import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import SortingOptions from './sortingOptions'
import PathingOptions from './pathingOptions'
import { resetAlgo, setAlgo } from '../actions/generalActions'

const sortingOptions = [
    {value: 'quick-sort', label: 'Quick Sort'},
    {value: 'merge-sort', label: 'Merge Sort'}
]

const pathingOptions = [
    {value: 'dijkstras-path', label: "Dijkstra's"}
]

const groupedOptions = [
    {
        label: 'Sorting Algorithms',
        options: sortingOptions
    },
    {
        label: 'Path Finding Algorithms',
        options: pathingOptions
    }
]

function ToolBar(props) {
    const displayOptions = () => {
        // switch between setup options here based on drop down select menu
        if(props.currentAlgo.category === 'sort') {
            return <SortingOptions/>
        } else if(props.currentAlgo.category === 'path') {
            return <PathingOptions/>
        } else {
            return null
        }
    }

    const handleSelect = (e) => {
        let selectValue = e.value.split('-')

        props.setAlgo({
            category: selectValue[1],
            name: selectValue[0]
        })
        
        let killId = setTimeout(() => {
            for(let i = killId; i > 0; i--) {
                clearInterval(i)
            }
        }, 1)

        props.resetAlgo()
    }

    return(
        <div>
            <Select options={groupedOptions} onChange={(e) => handleSelect(e)}/>
            {displayOptions()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentAlgo: state.currentAlgo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetAlgo: () => dispatch(resetAlgo()),
        setAlgo: (selectedAlgo) => dispatch(setAlgo(selectedAlgo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)