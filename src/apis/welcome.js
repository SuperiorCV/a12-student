import axios from 'axios'



export const login = (username, password) => {
  let fd = new FormData();
  fd.append("username", username);
  fd.append("password", password);
  return axios.post('/user/api/login', fd);
}

export const register = (form, avatar, username, email, password) => {
  let fd = new FormData();
  fd.append("name", form.name);
  fd.append("phoneNumber", form.phoneNumber);
  fd.append("school", form.school);
  fd.append("sex", form.sex);
  fd.append("avatar", avatar);
  fd.append("username", username);
  fd.append("email", email);
  fd.append("password", password);
  return axios.post('/user/api/register', fd);
}
