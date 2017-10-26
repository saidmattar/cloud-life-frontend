import React from 'react';
import {connect} from 'react-redux';
import DocumentForm from '../document-form';
import DocumentContainer from '../document-container';
import GroupContainer from '../group-container';
import {docCreateRequest, docsFetchRequest} from '../../action/document-actions.js';
import * as utils from '../../lib/utils';

class DashboardContainer extends React.Component {
  componentWillMount() {
    this.props.docsFetch();
  }

  render() {
    return (
      <div className="dashboard-container">
      <DocumentForm />
THING
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
  docCreate: doc => dispatch(docCreateRequest(doc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
