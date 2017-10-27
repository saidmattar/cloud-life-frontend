import './_dashboard-container.scss';

import React from 'react';
import {connect} from 'react-redux';
import DocumentForm from '../document-form';
import DocumentContainer from '../document-container';
import GroupContainer from '../group-container';
import {groupFetchRequest} from '../../action/group-actions.js';
import {profileFetchRequest} from '../../action/profile-actions';
import {docCreateRequest, docsFetchRequest} from '../../action/document-actions.js';
import * as utils from '../../lib/utils';

class DashboardContainer extends React.Component {
  componentWillMount() {
    this.props.docsFetch();
    this.props.groupFetch();
    this.props.profileFetch();
  }

  render() {
    return (
      <div className="dashboard-container">

      <h2>Upload and View Your Documents</h2>

      <DocumentForm />

      <DocumentContainer />
        </div>
    );
  }
}

let mapStateToProps = state => ({
  docs: state.docs,
});

let mapDispatchToProps = dispatch => ({
  docsFetch: () => dispatch(docsFetchRequest()),
  groupFetch: () => dispatch(groupFetchRequest()),
  profileFetch: () => dispatch(profileFetchRequest()),
  docCreate: doc => dispatch(docCreateRequest(doc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
