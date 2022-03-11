import axios from 'axios'

export const getMessage = (username) => {
    let fd = new FormData();
    fd.append("username", username);
    return axios.post('/message/api/get/all', fd);
  }

  export const read = (mid) => {
    let fd = new FormData();
    fd.append("mid", mid);
    return axios.post('/message/api/read', fd);
  }