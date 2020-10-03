import React from 'react'
// import GraphBars from './components/graphBars'
import QuickSort from './components/quickSort'
import './App.css'

function App() {
  let arr = [3,9,1,2,5,2,4,9,0,9,7,6,2,4]
  
  return (
    <div className="App">
      <h1>AlgoDex</h1>
      <QuickSort arr={arr}/>
    </div>
  )
}

export default App