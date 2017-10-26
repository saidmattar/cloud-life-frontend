import React from 'react';
import {connect} from 'react-redux';
import {docCreateRequest, docsFetchRequest} from '../../action/document-actions.js';
import * as utils from '../../lib/utils';

class DocumentContainer extends React.Component {

  render() {
    return (
      <div className="document-container">
      <h2>SOMETHING IS HERE IN THE DOCUMENT CONTAINER</h2>
      <ul>
        <li>A thing</li>
      </ul>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentContainer);
