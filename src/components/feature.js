import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchData from '../actions/fetchData';
import { bindActionCreators } from 'redux';



 

class Feature extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div id="data">
        <h1>Data Protection</h1>
        <hr />
        <h3>{this.props.data}</h3>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    auth: state.auth.authenticated,
    data: state.auth.data   
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Feature);