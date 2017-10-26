import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {docsFetchRequest, docCreateRequest} from '../../action/document-actions';
import DocItem from '../document-item';
import RaisedButton from 'material-ui/RaisedButton';

class DocForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.doc ?
      {...this.props.doc, preview: ''} :
      {description: '', preview: '', doc: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name} = e.target;
    if(name === 'description') this.setState({description: e.target.value});
    if(name === 'doc') {
      let {files} = e.target;
      let doc = files[0];
      this.setState({doc});
      utils.docToDataUrl(doc)
      .then(preview => this.setState({preview}))
      .catch(console.error);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('THESE IS PROPS', this.props.docCreate);
    console.log('DIS IS DE STATE', this.state);
    this.props.docCreate(this.state);
    // this.props.app.setState(docs => ({
    //   docs: [...prevState.docs, this.state],
    // }));
    console.log('State after we add a doc', this.state);
  }

  render() {
    return (


      <form
        className="doc-form"
        onSubmit={this.handleSubmit}>

//         <input
          type="file"
          name="doc"
          onChange={this.handleChange}/>

        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}/>

        <RaisedButton label="Upload" type="submit" />
      </form>
    );
  }
}

let mapStateToProps = state => ({
  docs: state.docs,
});

let mapDispatchToProps = dispatch => ({
  docsFetch: () => dispatch(docsFetchRequest()),
  docCreate: doc => dispatch(docCreateRequest(doc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocForm);
