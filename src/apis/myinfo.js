import axios from 'axios'

export const editInfo = (username,name,sex,email,school) => {
    let fd = new FormData();
    fd.append("username", username);
    fd.append("name", name);
    fd.append("sex", sex);
    fd.append("email", email);
    fd.append("school", school);
    return axios.post('/user/api/change/info', fd);
  }

export const editPwd = (username,oldPwd,newPwd) => {
  let fd = new FormData();
  fd.append("username", username);
  fd.append("oldPwd", oldPwd);
  fd.append("newPwd", newPwd);
  return axios.post('/user/api/change/password', fd);
}

export const searchClass = (command) => {
  let fd = new FormData();
  fd.append("command", command);
  return axios.post('/class/api/searchClass', fd);
}

export const joinClass = (username,command) => {
  let fd = new FormData();
  fd.append("username",username);
  fd.append("command", command);
  return axios.post('/class/api/enter', fd);
}

export const getStudentClass = (username) => {
  let fd = new FormData();
  fd.append("username",username);
  return axios.post('/class/api/get/student/class', fd);
}


  