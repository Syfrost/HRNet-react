import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalComponent from 'react-modal-create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ModalComponent>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="modal" alt="Vite logo"/>
            </a>
        </ModalComponent>
    </>
  )
}

export default App
