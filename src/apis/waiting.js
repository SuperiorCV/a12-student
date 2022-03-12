import axios from 'axios'

export const getExamInfo = (eid) => {
  let fd = new FormData();
  fd.append("eid", eid);
  return axios.post('/exam/api/getInfo', fd);
}

export const startExam = (eid,username) => {
  let fd = new FormData();
  fd.append("eid", eid);
  fd.append("username", username);
  return axios.post('/exam/api/startExam', fd);
}
