import './App.css'
import { LmButton } from './components'
import Crystal from './fragments/Crystal/Crystal'

function App() {

  return (
    <>
      <Crystal/>
      <h1>Lumino Morph</h1>
      <LmButton label="Click me" onClick={() => alert('Button clicked!')} />
      <p className="read-the-docs">
        learn more
      </p>
    </>
  )
}

export default App
