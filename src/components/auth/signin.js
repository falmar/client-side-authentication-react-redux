import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import signinUser  from '../../actions';
import { bindActionCreators } from 'redux';

class Signin extends Component {
handleFormSubmit({email,password}) {
   this.props.signinUser(email,password);
  }

alertMessage() {
  if (this.props.errorMessage) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>{this.props.errorMessage}</strong>
      </div>
    );
  }
}

  render() {
   const { handleSubmit} = this.props;

   
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      {this.alertMessage()}
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" type="text" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password" className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state){
  return { errorMessage : state.auth.error};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signinUser: signinUser
  }, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signin',
})(Signin));






