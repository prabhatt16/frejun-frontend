import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from '../actions/index';

export const getUsers = async () => {
  const dispatch = useDispatch();
  await axios
    .get('https://lime-kind-whale.cyclic.app/users')
    .then(e => {
      dispatch({type: 'get_users_details', payload: e.data}),
        console.log('dddd=>', e.data);
    })
    .catch(e => console.log(e));
};
export const getUser = async id => {
  console.log('iid is-', id);
  const dispatch = useDispatch();
  await axios
    .get(`https://lime-kind-whale.cyclic.app/user/${id}`)
    .then(e => dispatch({type: 'get_user_data', payload: e.data}))
    .catch(e => console.log(e));
};
export const editUserDetails = async (id, data) => {
  await axios
    .post(`https://lime-kind-whale.cyclic.app/edituser/${id}`, data)
    .then(e => console.log(e.data))
    .catch(e => console.log(e));
};
export const deleteUser = async id => {
  await axios
    .get(`https://lime-kind-whale.cyclic.app/delete/${id}`)
    .then(e => console.log(e.data))
    .catch(e => console.log(e));
};
export const addUser = async data => {
  await axios
    .post(`https://lime-kind-whale.cyclic.app/adduser`, data)
    .then(e => console.log(e.data))
    .catch(e => console.log(e));
};
