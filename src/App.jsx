import { useState } from 'react'
import Notification from './components/notification'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Notification type='info' message='A new toast' />
    </>
  )
}

export default App
