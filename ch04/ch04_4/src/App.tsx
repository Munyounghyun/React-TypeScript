import React from 'react'
import logo from './logo.svg'
import './App.css'
import FetchTest from './pages/FetchTest'
import WindowResizeTest from './pages/WindowResizeTest'
import ClassLifecycle from './pages/ClassLifecycle'

function App() {
  return (
    <main>
      <FetchTest />
      <WindowResizeTest />
      <ClassLifecycle />
    </main>
  )
}

export default App
