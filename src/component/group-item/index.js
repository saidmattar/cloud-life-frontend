import React from 'react';
import {connect} from 'react-redux';
import GroupForm from '../group-form';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import {docUpdateRequest} from '../../action/group-actions';
import * as utils from '../../lib/utils';

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

    return (
      <i class="material-icons">description</i>
      <GridTile className="group-item" title={group.description}>
        <div style={styles.icons}>
          <EditIcon style={styles.edit} onClick={this.toggleEdit}/>
        </div>

          {utils.renderIf(this.state.editing,
          <GroupForm
            buttonText = "update"
            group = {group}
            toggle = {this.toggleEdit}
            onComplete = {this.props.groupUpdate}/>
        )}
        </GridTile>
    );
  }
}

let mapStateToProps = state => ({});
let mapDispatchToProps = dispatch => ({
  groupUpdate: group => dispatch(groupUpdateRequest(group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupItem);
