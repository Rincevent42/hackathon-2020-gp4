import React from 'react';
import CallApiObject from '../components/CallApiObject';

console.log('Artwork.jsx');
const objectId = 49470;

function Artwork (props) {
  return (
    <div>
      <h1>Gallerie</h1>
      <CallApiObject objectId={objectId} />
    </div>
  );
}

export default Artwork;
