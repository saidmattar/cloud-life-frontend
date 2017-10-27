import React from 'react';
import {connect} from 'react-redux';
import GroupForm from '../group-form';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import {groupFetchRequest, groupUpdateRequest} from '../../action/group-actions';
import {docsFetchRequest} from '../../action/document-actions';
import * as utils from '../../lib/utils';
import {GridTile} from 'material-ui/GridList';

class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(group, profile) {
    console.log('handleclick for doc', group);

    this.props.groupUpdate(group, profile);
  }

  render() {
    let {group} = this.props;

    return (
      <div>
        <h2>Group:</h2>
        <p>{group.groupName}</p>
        <p>{group.description}</p>
        {this.props.profiles.data ?
          <div>
            {this.props.profiles.data.map(profile => {
              return <div
              onClick={() => this.handleClick(group, profile)}
              key={profile._id}>{profile.firstName}
              </div>;}
            )}
          </div>
          :
          undefined
        }
      </div>

    );
  }
}

let mapStateToProps = state => ({
  profiles: state.profiles,

  documents: [],
});
let mapDispatchToProps = dispatch => ({
  groupFetch: group => dispatch(groupFetchRequest(group)),
  groupUpdate: (group, profile) => dispatch(groupUpdateRequest(group, profile)),
  docsFetch: () => dispatch(docsFetchRequest()),

  groupDocUpdate: (group, doc) => dispatch(groupUpdateRequest(group, doc)),

});

export default connect(mapStateToProps, mapDispatchToProps)(GroupItem);
