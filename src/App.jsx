import { useState } from 'react'
import './style.css'
import data from './data'
import Nav from './Nav'
import Journal from './Journal'

function App() {
  const [count, setCount] = useState(0)
  const journalElements = data.map((item) => {
    return (
      <Journal
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      {journalElements}
    </div>
  )
}

export default App
