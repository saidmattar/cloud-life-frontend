import React from 'react';
import {connect} from 'react-redux';
import {groupsFetchRequest, groupCreateRequest} from '../../action/group-actions';
import GroupItem from '../group-item';
import * as utils from '../../lib/utils';
import RaisedButton from 'material-ui/RaisedButton';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.group ? {...this.props.group, description: ''} :
    {description: '', groupName: '', group: null};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name} = e.target;
    if(name === 'description') this.setState({description: e.target.value});
    if(name === 'groupName') this.setState({groupName: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.groupCreate(this.state);
  }

  render() {
    return (
      <form
        className="group-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="groupName"
          placeholder= "Name of your group"
          value={this.state.groupName}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="description"
          placeholder = "Description"
          value={this.state.description}
          onChange={this.handleChange}/>

        <RaisedButton label={this.props.buttonText} type="submit" />
      </form>
    );
  }
}

let mapStateToProps = state => ({
  groups: state.groups,
});

let mapDispatchToProps = dispatch => ({
  groupFetch: () => dispatch(groupsFetchRequest()),
  groupCreate: group => dispatch(groupCreateRequest(group)),
});

export default connect(mapStateToProps, mapDispatchToProps) (GroupForm);
