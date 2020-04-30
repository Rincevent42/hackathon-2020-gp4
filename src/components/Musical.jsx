import React from 'react';
import CallApiObject from '../components/CallApiObject';
import Footer from '../components/Footer';
import { Image, Card } from 'semantic-ui-react';

import '../styles/Artwork.css';

class Musical extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      objectId: [
        502652,
        503056,
        502678,
        503527,
        503283,
        503043,
        503048,
        503530,
        503676,
        503651,
        503703,
        503807,
        503678,
        503670,
        503846,
        503950,
        503954,
        503951,
        503860,
        503956],
      idx: 0
    };
  }

  render () {
    return (
      <div className='artwork'>
        <a className='return' href='/'>Home</a>
        <div className='header'>
          <Image src={require('../media/musical-instruments.jpg')} id='musical-img' />
        </div>
        <CallApiObject objectId={this.state.objectId} />
        <Footer />
      </div>
    );
  }
}

export default Musical;
