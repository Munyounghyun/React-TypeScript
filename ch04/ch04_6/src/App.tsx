import './App.css'
import '@fontsource/material-icons'
import ResponsiveContextTest from './pages/ResposiveContextTest'
import {ResponsiveProvider} from './contexts'
function App() {
  return (
    //모든 컨텍스트 제공자는 가장 최상위 컴포넌트로 동작해야한다는 원칙
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  )
}

export default App
