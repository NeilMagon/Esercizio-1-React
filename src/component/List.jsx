import React from 'react';
import People from './People';

function List({ people }) {
  if (!people || people.length === 0) {
    return <p>No people to display</p>;
  }

  return (
    <ul className='w-100'>
      {people.map(({ id, nome, stato, img }) => (
        <li key={id}>
          <People nome={nome} stato={stato} img={img} />
        </li>
      ))}
    </ul>
  );
}

export default List;
