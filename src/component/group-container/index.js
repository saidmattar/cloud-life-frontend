import React from 'react';
import {connect} from 'react-redux';
import GroupForm from '../group-form';
//import the group actions you need here
// import {docsFetchRequest, docCreateRequest} from '../../action/document-actions.js';
import * as utils from '../../lib/utils';

class GroupContainer extends React.Component {
  // componentWillMount() {
  //   if(!this.props.groups.length) this.props.groupSet();
  // }

  render() {
    return (
      <div className="group-container">
        <h2>Your Groups</h2>

        //I think we want a conditional in here like "if you have groups, show them and a way to create them, otherwise, just show a way to create a group"
        <GroupForm
          buttonText="create"
          onComplete={this.props.groupCreate}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  groups: state.groups,
});

let mapDispatchToProps = dispatch => ({
  groupSet: () => dispatch(groupsFetchRequest()),
  groupCreate: group => dispatch(groupCreateRequest(group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);
