import React from 'react';
import axios from 'axios';
import '../styles/CallApiObject.css';

class CallApiObject extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      artworkData: [],
      objectId: this.props.objectId
    }
  }

  componentDidMount () {
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.objectId}`)
      .then(response => {
        const artworkData = response.data;
        this.setState({ artworkData });
      })
      .catch(error => {
        console.log(error);
        alert('Une erreur s\'est produite lors du chargement des données.');
      });
  }

  render () {
    const data = this.state.artworkData;
    return (
      <div className="artwork">
        <h1>Gallerie : {data.department}</h1>
        <h2>{data.title}</h2>
        <h3>{(data.artistGender === 'Male') ? ('Mr') : ( (data.artistGender === 'Female') ? 'Mrs' : '' ) } {data.artistDisplayName}</h3>
        <img src={data.primaryImageSmall} alt='Artwork' />
        <p>{data.medium}</p>
      </div>
    );
  }
}

export default CallApiObject;
