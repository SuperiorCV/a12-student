import axios from 'axios'

export const getExam = (username) => {
    let fd = new FormData();
    fd.append("username", username);
    return axios.post('/exam/api/getExamByUsername', fd);
  }