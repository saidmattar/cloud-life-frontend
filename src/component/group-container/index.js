import React from 'react';
import {connect} from 'react-redux';
import GroupForm from '../group-form';
import GroupItem from '../group-item';
import {GridList} from 'material-ui/GridList';
import {groupsFetchRequest, groupCreateRequest} from '../../action/group-actions';
import * as utils from '../../lib/utils';

class GroupContainer extends React.Component {

  render() {

    return (
      <div className="group-container">
      {console.log('THIS.PROPS in group cont', this.props)}
      {console.log('tHIS IS PROPS.GROUPS', this.props.groups)}
        <h2>Your Groups</h2>

        this.props.groups != null ?
          {this.props.groups.map(group => <GroupItem key={group._id} group={group}/>)}
      :
          <h2> No Groups</h2>

        <GroupForm
        buttonText="submit"/>

        {console.log('state in mapStateToProps in groups', this.state)}

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
