import './_document-container.scss';

import React from 'react';
import {connect} from 'react-redux';
import DocItem from '../document-item';
import {GridList} from 'material-ui/GridList';
import {docCreateRequest, docsFetchRequest} from '../../action/document-actions.js';
import * as utils from '../../lib/utils';

class DocumentContainer extends React.Component {

  render() {
    // console.log('PROPS', this.props);
    return (
      <div className="document-container">
      {this.props.docs.map(doc => <DocItem key={doc._id} doc={doc}/>)}

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
