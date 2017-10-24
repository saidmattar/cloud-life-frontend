export default (state=[], action) => {
  let {type, payload} = action;
  switch(type) {
  case 'TOKEN_DELETE': return [];
  case 'DOCS_FETCH': return payload;
  case 'DOC_CREATE': return [payload, ...state];
  case 'DOC_UPDATE': return state.map(item => item._id === payload._id ? payload : item);
  case 'DOC_DELETE': return state.filter(item => item._id !== payload._id);
  default: return state;
  }
};
