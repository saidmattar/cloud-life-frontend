import React from 'react';
import {connect} from 'react-redux';
import DocForm from '../doc-form';
import {docUpdateRequest, docDeleteRequest} from '../../action/document-actions';
import * as utils from '../../lib/utils';
// import {GridTile} from 'material-ui/GridList';
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

    // const styles= {
    //   gridList: {
    //     'min-width': '45%',
    //     'position': 'relative',
    //   },
    //   icons: {
    //     'position': 'absolute',
    //     'top': '5%',
    //   },
    //   edit: {
    //     'color': '#ddd',
    //     'left': '10%',
    //   },
    //   delete: {
    //     'color': '#ddd',
    //     'left': '2%',
    //   },
    // };

    return (
      <GridTile className="doc-item" title={doc.description}>
        <div style={styles.icons}>
          <DeleteIcon style={styles.delete} onClick={() => this.props.docDelete(doc)}/>
          <EditIcon style={styles.edit} onClick={this.toggleEdit}/>
        </div>

        // {utils.renderIf(!this.state.editing,
        //   <div>
        //     <img src={photo.url} style={{'width': '100%'}}/>
        //   </div>
        // )}

        {utils.renderIf(this.state.editing,
          <DocForm
            buttonText = "update"
            doc = {doc}
            toggle = {this.toggleEdit}
            onComplete = {this.props.docUpdate}/>
        )}
        </GridTile>
    );
  }
}

let mapStateToProps = state => ({});
let mapDispatchToProps = dispatch => ({
  docUpdate: doc => dispatch(docUpdateRequest(doc)),
  docDelete: doc => dispatch(docDeleteRequest(doc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocItem);
