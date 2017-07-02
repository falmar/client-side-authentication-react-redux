import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signoutUser from '../actions/signoutUser';

class Header extends Component {
 signoutUser(){
  this.props.signoutUser();
 }
 renderLinks() {
   if (this.props.authenticated) {
     // show a link to sign out
     return <li className="nav-item" onClick={this.signoutUser.bind(this)} >
       <Link className="nav-link" to="/signout">Sign Out</Link>
     </li>;
     
   } else {
     // show a link to sign in or sign up
     return [
       <li className="nav-item" key={0}>
         <Link className="nav-link" to="/signin">Sign In</Link>
       </li>,
       <li className="nav-item" key={2}>
         <Link className="nav-link" to="/signup">Sign Up</Link>
       </li>
     ];
   }
 }
  
  render() {
    return (
      <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">React Redux Auth</Link>
        <ul className="nav navbar-nav">          
          
            {this.renderLinks()}          
                 
        </ul>
      </nav>
    );
  }
}



function mapStateToProps(state){
  return { authenticated : state.auth.authenticated};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signoutUser: signoutUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

