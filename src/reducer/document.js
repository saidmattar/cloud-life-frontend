export default (state=[], action) => {
  let {type, payload} = action;
  switch(type) {
  case 'TOKEN_DELETE': return [];
  case 'DOCUMENTS_FETCH': return payload;
  case 'DOCUMENT_CREATE': return [payload, ...state];
  case 'DOCUMENT_UPDATE': return state.map(item => item._id === payload._id ? payload : item);
  case 'DOCUMENT_DELETE': return state.filter(item => item._id !== payload._id);
  default: return state;
  }
};
