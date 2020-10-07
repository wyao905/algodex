import React from 'react'
import ToolBar from './components/toolBar'
import Visualizer from './components/visualizer'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>AlgoDex</h1>
      <ToolBar/>
      <Visualizer/>
    </div>
  )
}

export default App