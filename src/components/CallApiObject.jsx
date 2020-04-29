import React from 'react';
import axios from 'axios';

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
      })
  }

  render () {
    const imageURL = this.state.artworkData.primaryImageSmall;
    return <img src={imageURL} alt='Artwork' />;
  }
}

export default CallApiObject;
