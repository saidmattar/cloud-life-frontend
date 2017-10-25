import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import HomeContainer from '../home-container';
import {tokenSet} from '../../action/auth-actions';
import LandingContainer from '../landing-container';
import DocumentForm from '../document-form';
import Footer from '../footer';
// import SettingsContainer from '../settings-container';
import DashboardContainer from '../dashboard-container';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    let token = utils.cookieFetch('X-Cloud-Life-Token');
    if(token) this.props.tokenSet(token);
  }

  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
          <Navbar />

            <Route path="/" component={HomeContainer}/>
            <Route path="/signup" component={LandingContainer}/>
            <Route exact path="/settings" component={() => this.props.auth ? <SettingsContainer/> : <Redirect to="/" />}/>
            <Route exact path="/dashboard" component={() => this.props.auth ? <DashboardContainer/> : <Redirect to="/" />}/>

          <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
