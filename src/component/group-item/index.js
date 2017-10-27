import React from 'react';
import {connect} from 'react-redux';
import GroupForm from '../group-form';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import {groupFetchRequest} from '../../action/group-actions';
import * as utils from '../../lib/utils';
import {GridTile} from 'material-ui/GridList';

class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    let {group} = this.props;
    console.log('HUZZAH ITS PROPS', this.props);

    return (
      <div>
            {group.description}
            {this.props.profiles.map(profile => {<div key={profile._id}>{profile}</div>;})}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupItem);
