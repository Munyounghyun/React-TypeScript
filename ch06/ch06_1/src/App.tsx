import './App.css'
import {Routes} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import RoutesSetup from './routes/RoutesSetup'
import {useStore} from './store'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

function App() {
  const store = useStore()
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <RoutesSetup />
        </BrowserRouter>
      </DndProvider>
    </Provider>
  )
}

export default App
