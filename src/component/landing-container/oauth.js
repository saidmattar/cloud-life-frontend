// import React from 'react';
// import {connect} from 'react-redux';
// import {stringify} from 'querystring';
//
// class LandingContainer extends React.Component {
//   render() {
//     let AUTH_URL='https://accounts.google.com/o/oauth2/v2/auth';
//     let clientIDQuery='client_id=937373434274-10555rk6bfd2omi9qvlissfsp5oc1e89.apps.googleusercontent.com';
//     let responseTypeQuery='response_type=code';
//     let scopeQuery = 'scope=openid%20profile%20email';
//     let promptQuery = 'prompt=consent';
//     let redirectURIQuery = 'redirect_uri=http://localhost:3000/oauth/code';
//     let formatedAuthURL = `${AUTH_URL}?${clientIDQuery}&${responseTypeQuery}&${scopeQuery}&${promptQuery}&${redirectURIQuery}`;
//     return (
//      <div>
//       <h2>Login with Google</h2>
//        <a href={formatedAuthURL}>Login with Google</a>
//      </div>
//     );
//   }
// }
//
// let mapStateToProps = state => ({});
// let mapDispatchToProps = dispatch => ({});
//
// export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
