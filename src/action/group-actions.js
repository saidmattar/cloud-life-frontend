import superagent from 'superagent';

export const groupSet = group => ({
  type: 'GROUP_SET',
  payload: group,
});

export const groupCreate = group => ({
  type: 'GROUP_CREATE',
  payload: group,
});

export const groupUpdate = group => ({
  type: 'GROUP_UPDATE',
  payload :group,
});

export const groupFetchRequest = () => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.get(`${__API_URL__}/groups/me`)
  .set('Authorization', `Bearer ${auth}`)
  .then(res => {
    dispatch(groupSet(res.body));
    return res;
  });
};

export const groupCreateRequest = group => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/groups`)
  .set('Authorization', `Bearer ${auth}`)
  .field('name', group.name)
  .field('description', group.description)
  .then(res => {
    localStorage.userId = res.body._id;
    dispatch(groupCreate(res.body));
    return res;
  });
};

export const groupUpdateRequest = group => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.put(`${__API_URL__}/groups/${group._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .field('description', group.description)
  .field('groupName', group.groupName)
  .then(res => {
    dispatch(groupUpdate(group));
    return res;
  });
};
