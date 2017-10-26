import React from 'react';
import * as utils from '../../lib/utils';
import RaisedButton from 'material-ui/RaisedButton';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);

    //TODO
    this.state = this.props.group;

    /* ?
      {...this.props.group, preview: ''} :
      {description: '', preview: '', doc: null};*/


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
    this.props.onComplete(this.state)
    .then(() => this.setState({description: '', groupName: ''}));
  }

  render() {
    return (
      <form
        className="group-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="groupName"
          value={this.state.groupName}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}/>

        <RaisedButton label={this.props.buttonText} type="submit" />
      </form>
    );
  }
}

export default GroupForm;
