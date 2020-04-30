import React from 'react';
import CallApiObject from './CallApiObject';
import Footer from '../components/Footer';
import { Image, Card } from 'semantic-ui-react';

import '../styles/Artwork.css';

class Asian extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      objectId: [
        38212,
        38237,
        38146,
        54121,
        65397,
        65556,
        38452,
        38468,
        38634,
        39126,
        40407,
        50968,
        50973,
        52978,
        52679,
        52713,
        52778,
        52772],
      idx: 0
    };
  }

  render () {
    return (
      <div className='artwork'>
        <a className='return' href='/'>Home</a>
        <div className='header' id='asian-img' />
        <CallApiObject objectId={this.state.objectId} />
        <Footer />
      </div>
    );
  }
}

export default Asian;
