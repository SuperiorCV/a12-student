import axios from 'axios'

export const getExam = (username) => {
  let fd = new FormData();
  fd.append("username", username);
  return axios.post('/exam/api/getExamByUsername', fd);
}

export const getExamInfo = (eid) => {
  let fd = new FormData();
  fd.append("eid", eid);
  return axios.post('/exam/api/getInfo', fd);
}

export const getQuestionList = (eid) => {
  let fd = new FormData();
  fd.append("eid", eid);
  return axios.post("/exam/api/getQuestions", fd);
}

export const submit = (username, eid, questionList) => {
  let param = `?username=${username}&eid=${eid}`
  return axios.post("/exam/api/submit" + param, questionList);
}

export const getMyAnalyze = (username, eid) => {
  let fd = new FormData();
  fd.append("username",username);
  fd.append("eid", eid);
  return axios.post("/exam/api/getMyAnalyze", fd);
}
