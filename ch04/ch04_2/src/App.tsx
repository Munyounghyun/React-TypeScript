import logo from './logo.svg'
import './App.css'
import UseOrCreateTest from './pages/UseOrCreateTest'
import Callback from './pages/Callback'
import Memo from './pages/Memo'
import HighOrderCallback from './pages/HighOrderCallback'

function App() {
  return (
    <div className="App">
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UseOrCreateTest />
    </div>
  )
}

export default App
