import React from 'react';
import CallApiObject from '../components/CallApiObject';
import Footer from '../components/Footer';
import { Image, Card } from 'semantic-ui-react';

import '../styles/Artwork.css';

class European extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      objectId: [
        436572,
        436571,
        436543,
        436567,
        436537,
        436581,
        436574,
        436559,
        436583,
        436541,
        436542,
        436546,
        436577,
        436570,
        436584,
        436620,
        436601,
        436599,
        435631,
        435658],
      idx: 0
    };
  }

  render () {
    return (
      <div className='artwork'>
        <a className='return' href='/'>Home</a>
        <div className='header'>
          <Image src={require('../media/European.jpg')} id='european-img' />
        </div>
        <CallApiObject objectId={this.state.objectId} />
        <Footer />
      </div>
    );
  }
}

export default European;
