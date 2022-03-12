import axios from 'axios'

export const getExamInfo = (eid) => {
    let fd = new FormData();
    fd.append("eid", eid);
    return axios.post('/exam/api/getInfo', fd);
  }