import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import HomeContainer from '../home-container';
import {tokenSet} from '../../action/auth-actions';
import LandingContainer from '../landing-container';
import DocumentForm from '../document-form';
import Footer from '../footer';
import SettingsContainer from '../setting-container';
import DashboardContainer from '../dashboard-container';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import GroupContainer from '../group-container';


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

            <Route path="/group" component={() => localStorage.token ?<GroupContainer/> : <Redirect to="/" />}/>

            <Route path="/" component={HomeContainer}/>
            <Route path="/:auth" component={LandingContainer}/>
            <Route path="/settings" component={() => localStorage.token ? <SettingsContainer/> : <Redirect to="/" />}/>
            <Route path="/dashboard" component={() => localStorage.token ? <DashboardContainer/> : <Redirect to="/" />}/>
            {console.log('Logging props from app component', this.props)}
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
