import React from 'react';
import {connect} from 'react-redux';
import DocItem from '../document-item';
import {GridList} from 'material-ui/GridList';
import {docCreateRequest, docsFetchRequest} from '../../action/document-actions.js';
import * as utils from '../../lib/utils';

class DocumentContainer extends React.Component {

  render() {
    console.log('PROPS', this.props);
    return (
      <div className="document-container">
      <h2>SOMETHING IS HERE IN THE DOCUMENT CONTAINER</h2>


      {this.props.docs.map(doc => <DocItem key={doc._id} doc={doc}/>)}


      <ul>
        <li>A thing</li>
      </ul>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  docs: state.documents,
});

let mapDispatchToProps = dispatch => ({
  docsFetch: () => dispatch(docsFetchRequest()),
  docCreate: doc => dispatch(docCreateRequest(doc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentContainer);
