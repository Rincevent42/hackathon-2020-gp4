import React from 'react';
import CallApiObject from '../components/CallApiObject';
import Footer from '../components/Footer';
import { Image, Card } from 'semantic-ui-react';

import '../styles/Artwork.css';

class AOA extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      objectId: [
        310520,
        310540,
        310546,
        310542,
        310509,
        310524,
        310533,
        310554,
        310556,
        310568,
        310569,
        310589,
        310588,
        310472,
        310494,
        310256,
        310257,
        310262],
      idx: 0
    };
  }

  render () {
    return (
      <div className='artwork'>
        <a className='return' href='/'>Home</a>

        <div className='header'>
          <Image
            src={require('../media/AAOA.jpg')}
            size='medium'
            class='ui medium circular image'
          />
        </div>
        <CallApiObject objectId={this.state.objectId} />
        <Footer />
      </div>
    );
  }
}

export default AOA;
