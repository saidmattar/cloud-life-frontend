import reducer from '../reducer';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import {createStore, applyMuiddleware} from 'redux';

let appStoreCreate = () =>
  createStore(reducer,applyMuiddleware(thunk, reporter));

export default appStoreCreate;
