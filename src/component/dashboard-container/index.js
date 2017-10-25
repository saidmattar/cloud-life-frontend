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

        </div>

        // <DocumentForm
        //   buttonText="create"
        //   onComplete={this.props.docCreate} />
        //
        // <GroupForm
        //   buttonText="create a group"
        //   onComplete={this.props.groupCreate}/>
        //
        // <DocumentContainer/>
    );
  }
}

// let mapStateToProps = state => ({
  // docs: state.docs,
// });

// let mapDispatchToProps = dispatch => ({
  // docsFetch: () => dispatch(docsFetchRequest()),
  // docCreate: doc => dispatch(docCreateRequest(doc)),
// });

export default DashboardContainer;
