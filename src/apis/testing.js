import axios from 'axios'

export const store = (eid,studentUsername,image) => {
  let fd = new FormData();
  fd.append("eid", eid);
  fd.append("studentUsername", studentUsername);
  fd.append("image", image);
  return axios.post('/screenshot/api/take', fd);
}