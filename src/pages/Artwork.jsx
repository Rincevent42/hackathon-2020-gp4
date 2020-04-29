import React from 'react';
import CallApiObject from '../components/CallApiObject';

const objectId = [
  254779,
  254801,
  254923,
  254842,
  254843,
  255949,
  255973,
  254825,
  254819,
  256846];

// const objectId = 45734;

function Artwork (props) {
  return (
    <div>
      <CallApiObject objectId={objectId[1]} />
    </div>
  );
}

export default Artwork;
