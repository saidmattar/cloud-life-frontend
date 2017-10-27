import React from 'react';
import {connect} from 'react-redux';
import GroupForm from '../group-form';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import {groupFetchRequest, groupUpdateRequest} from '../../action/group-actions';
import * as utils from '../../lib/utils';
import {GridTile} from 'material-ui/GridList';

class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing});
  }

  handleClick(group, profile) {
    console.log('handleclick group', group);
    console.log('handleclick profile', profile);
    this.props.groupUpdate(group, profile);
  }

  render() {
    let {group} = this.props;
    console.log('HUZZAH ITS PROPS', this.props);

    return (
      <div>
        <h2>We are in the item</h2>
        {group.description}
        {this.props.profiles.map(profile => {
          return <div
          onClick={() => this.handleClick(group, profile)}
          key={profile._id}>{profile.firstName}</div>;}
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profiles: state.profiles.data,
  documents: state.documents.data,
});
let mapDispatchToProps = dispatch => ({
  groupFetch: group => dispatch(groupFetchRequest(group)),
  groupUpdate: (group, profile) => dispatch(groupUpdateRequest(group, profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupItem);
