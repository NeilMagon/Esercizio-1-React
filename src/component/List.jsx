import React from 'react';
import People from './People';

function List({ people, removeItem }) {
  if (!people || people.length === 0) {
    return <p>No people to display</p>;
  }

  return (
    <ul className='w-100'>
      {people.map(({ id, nome, stato, img}) => (
        <li key={id}>
          <People id={id} nome={nome} stato={stato} img={img} removeItem={removeItem}/>
        </li>
      ))}
    </ul>
  );
}

export default List;
