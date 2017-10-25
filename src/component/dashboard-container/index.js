import React from 'react';
import {connect} from 'react-redux';
import DocumentForm from '../document-form';
import {docsFetchRequest, docCreateRequest} from '../../action/document-actions.js';
import * as utils from '../../lib/utils';

class DashboardContainer extends React.Component {
  // componentWillMount() {
  //   if(!this.props.docs.length) this.props.docsFetch();
  // }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Your Dashboard</h2>
        <DocumentForm
          buttonText="create"
          onComplete={this.props.docCreate}/>
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
