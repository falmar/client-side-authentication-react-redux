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
      <div>{this.props.data}</div>
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