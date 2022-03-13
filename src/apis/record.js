import axios from 'axios'

export const getExams = (username) => {
  let fd = new FormData();
  fd.append("username", username);
  return axios.post('/exam/api/getExams', fd);
}