import axios from 'axios'

export const getAnswerPaper = (studentUsername, eid) => {
  let fd = new FormData();
  fd.append("studentUsername", studentUsername);
  fd.append("eid", eid);
  return axios.post("/exam/api/getAnswerPaper", fd);
}

export const getMyAnalyze = (username, eid) => {
  let fd = new FormData();
  fd.append("username", username);
  fd.append("eid", eid);
  return axios.post("/exam/api/getMyAnalyze", fd);
}
