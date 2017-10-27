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
  console.log('HERE WE ARE!!!');
  return superagent.get(`${__API_URL__}/groups`)
  .then(res => {
    console.log('res body for groups', res.body);
    dispatch(groupSet(res.body));
    return res;
  });
};

export const groupCreateRequest = group => (dispatch, getState) => {
  console.log('GROUP groupcr', group);
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/group`)
  .set('Authorization', `Bearer ${auth}`)
  .field('groupName', group.groupName)
  .field('description', group.description)
  .then(res => {
    console.log('Res', res.body);
    localStorage.userId = res.body._id;
    dispatch(groupCreate(res.body));
    return res;
  });
};

export const groupUpdateRequest = (group, profile) => (dispatch, getState) => {
  let {auth} = getState();
  console.log('LOGGED PROFILE UPDATEGROUP THING', group);
  console.log('LOGGITY LOG', profile);
  return superagent.put(`${__API_URL__}/group/${group._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .set('Content-Type', 'application/json')
  .send(profile)
  .then(res => {
    console.log('ressssss', res);
    dispatch(groupUpdate(group));
    return res;
  });
};
