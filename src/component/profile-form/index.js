import React from 'react';
import * as utils from '../../lib/utils';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ?
      {...props.profile, preview: ''} :
      {bio: '', preview: '', alias: '', avatar: null, firstName: '', lastName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// TO DO: CHANGE THIS BLOCK
//   handleChange(e) {
//     let {type, name} = e.target;
//     if(name === 'bio') this.setState({bio: e.target.value});
//     if(name === 'avatar') {
//       let {files} = e.target;
//       let avatar = files[0];
//       this.setState({avatar});
//
//       utils.photoToDataUrl(avatar)
//       .then(preview => this.setState({preview}))
//       .catch(console.error);
//     }
//   }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form
        className = "profile-form"
        onSubmit ={this.handleSubmit}>

        <img src={this.state.preview} style={{'width': '25%'}}/>
        <input
          type="file"
          name="avatar"
          onChange={this.handleChange}/>

        <textarea
          name="bio"
          value={this.state.bio}
          onChange={this.handleChange}>
        </textarea>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value= {this.state.firstName}/>

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value= {this.state.lastName}/>

        <input
          type="text"
          name="alias"
          placeholder="Nickname"
          value= {this.state.firstName}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
//something to think about here: we want to be able to display a person's groups too
    );
  }
}

export default ProfileForm;
