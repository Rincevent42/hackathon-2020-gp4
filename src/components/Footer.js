import React, { Component } from 'react';
import '../styles/Footer.css';
import { faFish, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Footer extends Component {
  render () {
    return (

      <div className='footer-style'>
        <p>© 2020 Copyright : By Wilders <FontAwesomeIcon icon={faHeart} /> | <span>Hack A <FontAwesomeIcon className='fish' icon={faFish} /></span></p>

      </div>
    );
  }
}

export default Footer;
