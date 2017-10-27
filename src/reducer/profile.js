let validateProfile = profile => {
  let {avatar, bio, _id, username, email, firstName, lastName, alias} = profile;
  if(!avatar || !bio || !_id || !username || !email || !firstName || !lastName || !alias)
    throw new Error('VALIDATION ERROR: profile requires more fields');
  return profile;
};

export default (state={}, action) => {
  let {type, payload} = action;
  switch(type) {
  case 'TOKEN_DELETE': return null;
  case 'PROFILE_SET': return payload;
  case 'PROFILE_CREATE': return payload;
  default: return state;
  }
};
