import React from 'react';
import {connect} from 'react-redux';
import DocForm from '../document-form';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import {docUpdateRequest, docDeleteRequest} from '../../action/document-actions';
import * as utils from '../../lib/utils';
import {GridTile} from 'material-ui/GridList';
// import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
// import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep';

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
          <a href={doc.url}> link to {doc.description}</a>
          </li>
        </ul>
      </div>


        // {utils.renderIf(!this.state.editing,
        //   <div>
        //     <img src={doc.url} style={{'width': '100%'}}/>
        //   </div>
        // )}

        // {utils.renderIf(this.state.editing,
        //   <DocForm
        //     buttonText = "update"
        //     doc = {doc}
        //     toggle = {this.toggleEdit}
        //     onComplete = {this.props.docUpdate}/>
        // )}
    );
  }
}

let mapStateToProps = state => ({});
let mapDispatchToProps = dispatch => ({
  docUpdate: doc => dispatch(docUpdateRequest(doc)),
  docDelete: doc => dispatch(docDeleteRequest(doc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocItem);
