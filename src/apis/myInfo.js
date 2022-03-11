import axios from 'axios'

export const getActivity = (username) => {
  let fd = new FormData();
  fd.append("username", username);
  return axios.post('/user/api/get/activity', fd);
}
