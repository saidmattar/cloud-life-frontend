import React from 'react';
import {connect} from 'react-redux';
import GroupForm from '../group-form';

import GroupItem from '../group-item';
import {GridList} from 'material-ui/GridList';

import {groupsFetchRequest, groupCreateRequest} from '../../action/group-actions';


import * as utils from '../../lib/utils';

class GroupContainer extends React.Component {

  render() {

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
    };

    return (
      <div className="group-container">
        <h2>Your Groups</h2>

        <GroupForm
          buttonText="create"
          onComplete={this.props.groupCreate}/>

          <GridList style={styles.root} cellHeight={180}>
        {this.props.groups.map(group=> <GroupItem key={group._id} group={group}/>)}
      </GridList>


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
