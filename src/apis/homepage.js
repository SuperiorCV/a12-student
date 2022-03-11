import axios from 'axios'

export const getInfo = (username) => {
    let fd = new FormData();
    fd.append("username", username);
    return axios.post('/user/api/get/info', fd);
  }