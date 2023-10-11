import NumberState from './pages/NumberState'
import InputTest from './pages/InputTest'
import ShowHideModal from './pages/ShowHideModal'
import RadioInputTest from './pages/RadioInputTest'
import HigherOrderRadioInputTest from './pages/HigherOrderRadioInputTest'
import ObjectState from './pages/ObjectState'
import ArrayState from './pages/ArrayState'
import BasicForm from './pages/BasicForm'

function App() {
  return (
    <main>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </main>
  )
}

export default App
