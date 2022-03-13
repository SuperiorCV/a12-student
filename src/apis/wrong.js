import axios from 'axios'

export const getWrong = (username) => {
  let fd = new FormData();
  fd.append("username", username);
  return axios.post('/question/api/wrong', fd);
}

export const killWrong = (qid,eid,studentUsername) => {
  let fd = new FormData();
  
  fd.append("qid",qid);
  fd.append("eid",eid);
  fd.append("studentUsername",studentUsername);
  return axios.post('/question/api/kill',fd);
}