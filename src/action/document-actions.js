import superagent from 'superagent';
import * as utils from '../lib/utils';

export const docsFetch = docs => ({
  type: 'DOCS_FETCH',
  payload: docs,
});

export const docCreate = doc => ({
  type: 'DOC_CREATE',
  payload: doc,
});

export const docUpdate = doc => ({
  type: 'DOC_UPDATE',
  payload: doc,
});

export const docDelete = doc => ({
  type: 'DOC_DELETE',
  payload: doc,
});

export const docsFetchRequest = docs => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.get(`${__API_URL__}/docs/me`)
  .set('Authorization', `Bearer ${auth}`)
  .then(res => {
    dispatch(docsFetch(res.body.data));
    return res;
  });
};

export const docCreateRequest = doc => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/docs`)
  .set('Authorization', `Bearer ${auth}`)
  .field('description', doc.description)
  .attach('doc', doc.doc)
  .then(res => {
    dispatch(docCreate(res.body));
    return res;
  }).catch(
    err => {
      console.log('Hello!!'  , err)
    }
  );
};

export const docUpdateRequest = doc => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.put(`${__API_URL__}/docs/${doc._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .field('description', doc.description)
  .attach('doc', doc.doc)
  .then(res => {
    dispatch(docUpdate(doc));
    return res;
  });
};

export const docDeleteRequest = doc => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.delete(`${__API_URL__}/docs/${doc._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .then(res => {
    dispatch(docDelete(doc));
    return res;
  });
};
