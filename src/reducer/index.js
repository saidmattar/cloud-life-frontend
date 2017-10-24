import {combineReducers} from 'redux';
import profiles from './profile';
import auth from './auth';
import documents from './document';
import groups from './group';

export default combineReducers({
  auth,
  profiles,
  documents,
  groups,
});
