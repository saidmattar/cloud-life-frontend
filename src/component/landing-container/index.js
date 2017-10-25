import React from 'react';
import {connect} from 'react-redux';
import {signupRequest, loginRequest} from '../../action/auth-actions';
import * as utils from '../../lib/utils';
// import {stringify} from 'querystring';
import AuthForm from '../auth-form';

class LandingContainer extends React.Component {
  render() {
    let {params} = this.props.match;
    let handleComplete = params.auth === 'login' ?
      this.props.login :
      this.props.signup;

    let redirect = path => this.props.history.replace(path);
    return (
      <div>
        <h3>Sign in to your Cloud Life Account</h3>
        <AuthForm
        auth={params.auth}
        redirect={redirect}
        onComplete={handleComplete}/>
    
        </div>


    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  login: user => dispatch(loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
