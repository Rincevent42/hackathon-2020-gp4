import React from 'react';
import axios from 'axios';
import '../styles/CallApiObject.css';
import Button from '../components/Button';

class CallApiObject extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      artworkData: [],
      objectId: this.props.objectId,
      idx: 0
    };
    this.getData = this.getData.bind(this);
  }

  handleNext = () => {
    if (this.state.idx < this.state.objectId.length) {
      this.setState({idx: this.state.idx + 1});
      this.getData();
    }
  }

  handlePrevious = () => {
    if (this.state.idx > 0) {
      this.setState({idx: this.state.idx - 1});
      this.getData();
    }
  }

  getData () {
    const artwork = this.state.objectId[this.state.idx];
    console.log('artwork = ' + artwork);
    console.log('idx = ' + this.state.idx);
    axios
      .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artwork}`)
      .then(response => {
        const artworkData = response.data;
        this.setState({ artworkData });
      })
      .catch(error => {
        console.log(error);
        alert('Une erreur s\'est produite lors du chargement des données.');
      });
  }

  componentDidMount () {
    this.getData();
    if (this.state.idx < this.state.objectId.length) {
      this.setState({idx: this.state.idx + 1});
    }
  }

  render () {
    const data = this.state.artworkData;
    return (
      <div className="call-api-object">
        <h1>Gallerie : {data.department}</h1>
        <h2>{data.title}</h2>
        <h3>{(data.artistGender === 'Male') ? ('Mr') : ((data.artistGender === 'Female') ? 'Mrs' : '')} {data.artistDisplayName}</h3>
        <img src={data.primaryImageSmall} alt='Artwork' />
        <p>{data.medium}</p>
        <div className='session-button-container'>
          <Button
            content='<'
            className='session-button back'
            onClick={this.handlePrevious}
          />
          <Button
            content='>'
            className='session-button next'
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }
}

export default CallApiObject;
