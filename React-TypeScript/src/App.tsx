import { useState } from 'react'
import './App.css'

interface Persona {
  name: string
  age: number
  dni: string
}

function App (product: Persona, name: string) {
  product.age
  name
  // No hace falta poner el tipo en useState, ya conoce el tipo
  const [count, setCount] = useState(1)
  // Esto es para indicar el tipo
  const [first, setfirst] = useState<number>(1)

  return (
    <div>
      React
    </div>
  )
}

export default App
