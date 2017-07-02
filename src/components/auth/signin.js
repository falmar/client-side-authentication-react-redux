import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import signinUser from '../../actions';
import { bindActionCreators } from 'redux';
import {required, email, minLength} from '../../Services/validation';


// renders form fields
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <fieldset className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={`Enter your ${label}`} type={type} className="form-control" />
      {touched && ((error && <span id="error">{error}</span>) || (warning && <span id="warning">{warning}</span>))}
    </div>
  </fieldset>
);


class Signin extends Component {
  handleFormSubmit({ email, password }) {      
    this.props.signinUser(email, password);
    this.props.reset();
  }
  
  // error message alert from server
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
    const { handleSubmit,dirty, invalid} = this.props;
   
    return (
      
      <form id="signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>      
        {this.alertMessage()}                  
          <Field name="email"
            component={renderField}
            type="text"
            label="Email"          
            validate={[email, required]}
          />    
          <Field 
            name="password" 
            component={renderField} 
            type="password" 
            label="Password"                       
            validate={[ required, minLength(3)]}
            />       
        <button action="submit" disabled={dirty && invalid ? true : false} className="btn btn-primary">Sign in</button>
      </form>
     

     
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error , auth : state.auth.authenticated};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signinUser,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signin',
  
})(Signin));
