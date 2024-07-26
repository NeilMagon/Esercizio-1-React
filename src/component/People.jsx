import React from 'react';

function People({ id, nome, stato, img, removeItem }) {
  return (
      <div className='d-flex align-items-center py-2'>
        <img src={img} alt={nome} className='img'/>
        <div className='ps-2 w-100'>
          <div className='d-flex text-white align-items-center justify-content-between'>
            <h5>{nome}</h5>
            <button onClick={() => removeItem(id)} className='btn ms-btn rounded-5'>
              <small>Remove</small>
            </button>
          </div>
          <div className='text-white'>
            <p>{stato}</p>
          </div>
        </div>
      </div>
  );
}

export default People;