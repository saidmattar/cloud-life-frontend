let validateGroup = group => {
  let {_id, groupName} = group;
  if(!_id || !groupName)
    throw new Error('VALIDATION ERROR: group requires more fields');
  return group;
};

export default (state=null, action) => {
  let {type, payload} = action;
  switch(type) {
  case 'TOKEN_DELETE': return null;
  case 'GROUP_SET': return payload;
  case 'GROUP_CREATE': return payload;
  default: return state;
  }
};
