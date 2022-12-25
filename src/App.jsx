import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import Filter from './components/Filter'
import Anc from './components/Anc'
import './App.css'
import Cardbig from './components/cardbig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='hero'>
        {/* <Anc/> */}
        <Cardbig/>
      {/* <Filter/> */}

      </div>
      
    </div>
  )
}

export default App
