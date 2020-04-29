import React from 'react';
import CallApiObject from '../components/CallApiObject';

import '../styles/Artwork.css';

class Artwork extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      objectId: this.props.objectId,
      idx: 0
    };
  }

  render () {
    return (
      <div className='artwork'>
        <CallApiObject objectId={this.state.objectId} />
      </div>
    );
  }
}

export default Artwork;
