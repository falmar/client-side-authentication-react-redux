import React, { Component } from 'react';

class Signout extends Component {

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }

  render() {
    return (
      <div>
        <h1>Sorry your leaving us</h1>
        <div id="map" ref="map"></div>
      </div>
    );
  }
}

export default Signout;