import React from 'react';
import * as utils from '../../lib/utils';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile
    ? {firstName: this.props.profile.firstName, lastName: this.props.profile.lastName, bio: this.props.profile.bio}
    : {firstName: '', lastName: '', bio: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name} = e.target;
    if(name === 'firstName') this.setState({firstName: e.target.value});
    if(name === 'lastName') this.setState({lastName: e.target.value});
    if(name === 'bio') this.setState({bio: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form
        className = "profile-form"
        onSubmit ={this.handleSubmit}>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value= {this.state.firstName}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value= {this.state.lastName}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="bio"
          placeholder="Bio"
          value= {this.state.bio}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>

    );
  }
}

export default ProfileForm;
