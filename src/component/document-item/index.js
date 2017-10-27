import React from 'react';
import {connect} from 'react-redux';
import DocForm from '../document-form';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import {docUpdateRequest, docDeleteRequest} from '../../action/document-actions';
import * as utils from '../../lib/utils';
import {GridTile} from 'material-ui/GridList';


class DocItem extends React.Component {
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
    let {doc} = this.props;

    return (
      <div>
        <ul>
            <li className="doc-item">
            {doc.description}
            <a href={doc.url}> download {doc.description}</a>
          </li>
        </ul>
      </div>


    );
  }
}

let mapStateToProps = state => ({});
let mapDispatchToProps = dispatch => ({
  docUpdate: doc => dispatch(docUpdateRequest(doc)),
  docDelete: doc => dispatch(docDeleteRequest(doc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocItem);
