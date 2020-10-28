import React from 'react'
import { connect } from 'react-redux'
import GridBlocks from './gridBlocks'
import { updateGrid } from '../../actions/pathingActions'
import { stopAlgo, setComplete } from '../../actions/generalActions'

class Grid {
    constructor() {
        this.nodes = []
        this.adjacencyList = {}
    }

    addNode(node) {
        this.nodes.push(node)
        this.adjacencyList[node.coords] = {right: null,
                                           top: null,
                                           left: null,
                                           bottom: null}
    }

    addEdge(node1, node2, pos) {
        let oppositePos
        switch(pos) {
            case 'left':
                oppositePos = 'right'
                break
            case 'top':
                oppositePos = 'bottom'
                break
            case 'right':
                oppositePos = 'left'
                break
            default:
                oppositePos = 'top'
                break
        }

        if(!this.adjacencyList[node1.coords][pos]) {
            this.adjacencyList[node1.coords][pos] = node2.coords
            this.adjacencyList[node2.coords][oppositePos] = node1.coords
        }
    }
}

class PriorityQueue {
    constructor() {
        this.collection = []
    }

    enqueue(element) {
        this.collection.push(element)
    }

    dequeue() {
        return this.collection.shift()
    }

    isEmpty() {
        return (this.collection.length === 0)
    }
}

function Dijkstras(props) {
    let displayGrid = new Grid()
    let pq = new PriorityQueue()
    let times = {}
    let backtrace = {}
    const instructions = []
    
    instructions.push({type: 'INITIALIZE_GRID', value: [...props.grid]})

    for(let i = 0; i < props.grid.length; i++) {
        for(let j = 0; j < props.grid[i].length; j++) {
            if(props.grid[i][j].open) {
                displayGrid.addNode({...props.grid[i][j]})
            }
        }
    }

    for(let i = 0; i < props.grid.length; i++) {
        for(let j = 0; j < props.grid[i].length; j++) {
            if(props.grid[i][j].open) {
                if(!!props.grid[i + 1] && props.grid[i + 1][j].open) {
                    displayGrid.addEdge(props.grid[i][j], props.grid[i + 1][j], 'right')
                }

                if(!!props.grid[i][j - 1] && props.grid[i][j - 1].open) {
                    displayGrid.addEdge(props.grid[i][j], props.grid[i][j - 1], 'top')
                }

                if(!!props.grid[i - 1] && props.grid[i - 1][j].open) {
                    displayGrid.addEdge(props.grid[i][j], props.grid[i - 1][j], 'left')
                }

                if(!!props.grid[i][j + 1] && props.grid[i][j + 1].open) {
                    displayGrid.addEdge(props.grid[i][j], props.grid[i][j + 1], 'bottom')
                }
            }
        }
    }

    let pointA = props.pointA.join(',')
    let pointB = props.pointB.join(',')

    times[pointA] = 0

    displayGrid.nodes.forEach(node => {
        if(node.coords !== pointA) {
            times[node.coords] = Infinity
        }
    })

    pq.enqueue(pointA)

    
    let foundEnd = false
    while(!pq.isEmpty()) {
        let shortestStep = pq.dequeue()
        if(shortestStep !== pointB) {
            instructions.push({type: 'VISIT_BOX_GRID', value: shortestStep.split(',').map(i => parseInt(i))})
            let currentNode = shortestStep

            if(!!displayGrid.adjacencyList[currentNode].right && !foundEnd) {
                let time = times[currentNode] + 1
                if(time < times[displayGrid.adjacencyList[currentNode].right]) {
                    times[displayGrid.adjacencyList[currentNode].right] = time
                    backtrace[displayGrid.adjacencyList[currentNode].right] = currentNode
                    pq.enqueue(displayGrid.adjacencyList[currentNode].right)
                    if(displayGrid.adjacencyList[currentNode].right === pointB) {
                        foundEnd = true
                    }
                }
            }

            if(!!displayGrid.adjacencyList[currentNode].top && !foundEnd) {
                let time = times[currentNode] + 1
                if(time < times[displayGrid.adjacencyList[currentNode].top]) {
                    times[displayGrid.adjacencyList[currentNode].top] = time
                    backtrace[displayGrid.adjacencyList[currentNode].top] = currentNode
                    pq.enqueue(displayGrid.adjacencyList[currentNode].top)
                    if(displayGrid.adjacencyList[currentNode].top === pointB) {
                        foundEnd = true
                    }
                }
            }

            if(!!displayGrid.adjacencyList[currentNode].left && !foundEnd) {
                let time = times[currentNode] + 1
                if(time < times[displayGrid.adjacencyList[currentNode].left]) {
                    times[displayGrid.adjacencyList[currentNode].left] = time
                    backtrace[displayGrid.adjacencyList[currentNode].left] = currentNode
                    pq.enqueue(displayGrid.adjacencyList[currentNode].left)
                    if(displayGrid.adjacencyList[currentNode].left === pointB) {
                        foundEnd = true
                    }
                }
            }

            if(!!displayGrid.adjacencyList[currentNode].bottom && !foundEnd) {
                let time = times[currentNode] + 1
                if(time < times[displayGrid.adjacencyList[currentNode].bottom]) {
                    times[displayGrid.adjacencyList[currentNode].bottom] = time
                    backtrace[displayGrid.adjacencyList[currentNode].bottom] = currentNode
                    pq.enqueue(displayGrid.adjacencyList[currentNode].bottom)
                    if(displayGrid.adjacencyList[currentNode].bottom === pointB) {
                        foundEnd = true
                    }
                }
            }
        }
    }

    if(foundEnd) {
        let lastStep = pointB

        while(lastStep !== pointA) {
            instructions.push({type: 'DRAW_PATH_GRID', value: lastStep.split(',').map(i => parseInt(i))})
            lastStep = backtrace[lastStep]
        }
    }    

    const dispatchInstructions = () => {
        if(props.isRunning) {
            for(let i = 0; i < instructions.length; i++) {
                setTimeout(() => props.updateGrid(instructions[i]), 20 * i)
            }
            setTimeout(() => props.stopAlgo(), 20 + (instructions.length * 20))
            props.setComplete()
        }
    }
    
    dispatchInstructions()

    return(
        <div>
            <GridBlocks/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        grid: state.initialGrid,
        pointA: state.pointA,
        pointB: state.pointB,
        isRunning: state.visualRun
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateGrid: (instruction) => dispatch(updateGrid(instruction)),
        stopAlgo: () => dispatch(stopAlgo()),
        setComplete: () => dispatch(setComplete())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dijkstras)