import React from 'react'
// import GraphBars from './components/graphBars'
import QuickSort from './components/quickSort'
import ToolBar from './components/toolBar'
import './App.css'

function App() {
  let arr = [99, 52, 32, 61, 0,12, 84,56,32,54,75,23,62,15,23,69,85,82, 42, 30, 25,1, 65, 75, 84, 20, 31, 66, 14, 2, 3]
  
  return (
    <div className="App">
      <h1>AlgoDex</h1>
      <ToolBar/>
      <QuickSort arr={arr}/>
    </div>
  )
}

export default App