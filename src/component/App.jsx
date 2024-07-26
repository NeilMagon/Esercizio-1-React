import React from 'react'
import { useState } from 'react'
import Data from '../data'
import List from './List'

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <>
      <div className='ms-container my-3'>
        <h2 className='text-center'>Prossimi incontri</h2>
        <div className='d-flex justify-content-center'>
          <List />
        </div>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-primary'>Reload</button>
          <button className='btn btn-danger'>Delete-All</button>
        </div>
      </div>
    </>
  )
}

export default App
