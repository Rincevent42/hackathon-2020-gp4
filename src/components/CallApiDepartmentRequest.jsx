import React from 'react';
import axios from 'axios';

class CallApiDepartmentRequest extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      departmentData: []
    };
  }

  componentDidMount () {
    this.getData();
  }

  getData () {
    const departmentId = this.props.departmentId;
    axios
      .get(`https://collectionapi.metmuseum.org/public/collection/v1/search?department=${departmentId}&isOnView=true&isHighlight=true&hasImages=true&q=*`)
      .then(response => {
        const data = response.data.objectIDs;
        /* Keep the 10 firsts artwork only */
        const departmentData = data.slice(0, 10);
        this.setState({ departmentData });
      })
      .catch(error => {
        console.log(error);
        alert('Une erreur s\'est produite lors du chargement des données (department).');
      });
  }

  render () {
    return (
      <div>
git 
      </div>
    );
  }
}

export default CallApiDepartmentRequest;
