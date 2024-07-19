import { useState } from 'react'
import './App.css'

import BlogBox from './components/pages/BlogBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BlogBox/>
  )
}

export default App
