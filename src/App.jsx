import React, { useState } from 'react'
import Data from './data'
import List from './component/List'

function App() {
  const [people, setPeople] = useState(Data)
  
  function reloadAllItems() {
    setPeople(Data);
  };

  function removeItem(id) {
    setPeople(oldValue => oldValue.filter(item => item.id !== id));
  }

  return (
    <>
      <div className='ms-container my-3'>
        <h2 className='text-center text-white'>Prossimi incontri</h2>
        <div className='d-flex justify-content-center ms-bg-color px-4 rounded-5'>
          <List people = {people} removeItem={removeItem}/>
        </div>
        <div className='d-flex justify-content-between mt-4'>
          <button className='btn btn-primary' onClick={reloadAllItems}>Reload</button>
          <button className='btn btn-danger' onClick={()=> setPeople([])}>Delete-All</button>
        </div>
      </div>
    </>
  )
}

export default App
