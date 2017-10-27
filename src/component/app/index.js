import './_app.scss';

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
import {groupFetchRequest} from '../../action/group-actions.js';
import {profileFetchRequest} from '../../action/profile-actions.js';

import GroupContainer from '../group-container';


class App extends React.Component {

  componentWillMount() {
    let token = utils.cookieFetch('X-Cloud-Life-Token');
    if(token) this.props.tokenSet(token);
    this.props.groupFetch();
    this.props.profileFetch();
  }

  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
          <Navbar />

            <Route exact path="/group" component={() => this.props.auth ? <GroupContainer/> : <Redirect to="/" />}/>

            <Route exact path="/" component={HomeContainer}/>
            <Route path="/welcome/:auth" component={LandingContainer}/>
            <Route exact path="/settings" component={() => this.props.auth ? <SettingsContainer/> : <Redirect to="/" />}/>
            <Route exact path="/dashboard" component={() => this.props.auth ? <DashboardContainer/> : <Redirect to="/" />}/>
            {console.log('Logging props from app component', this.props)}

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
  groupFetch: () => dispatch(groupFetchRequest()),
  profileFetch: () => dispatch(profileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
