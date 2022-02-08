<template>
  <div class="container">
    <div class="welcome">
      <div class="mainbox">
        <!-- 注册 -->
        <div class="signup nodisplay">
          <h1>Register</h1>
          <form action="" autocomplete="off">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button class="button submit">Create Account</button>
          </form>
        </div>
        <!-- 登录 -->
        <div class="signin">
          <h1>Sign In</h1>
          <form class="more-padding" action="" autocomplete="off">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div class="checkbox">
              <input type="checkbox" id="remember" /><label for="remember"
                >Remember Me</label
              >
            </div>
            <button class="button submit">Login</button>
          </form>
        </div>
      </div>
      <!-- 背景盒子 -->
      <div class="leftbox">
        <h2 class="title"><span>阿巴阿巴</span><br />阿巴阿巴</h2>
        <p class="desc">你要考试了<span>恐惧吧</span></p>
        <img
          class="picture smaller"
          src="../../../static/resource/welcome-background.jpg"
          alt=""
        />
        <p class="account">Hava an account?</p>
        <button class="button" id="signin">Login</button>
      </div>

      <div class="rightbox">
        <h2 class="title"><span>阿巴</span><br />阿巴</h2>
        <p class="desc">你要考试了<span>恐惧吧</span></p>
        <img
          class="picture"
          src="../../../static/resource/welcome-background.jpg"
          alt=""
        />
        <p class="account">Don't have an account?</p>
        <button class="button" id="signup">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>

<style scoped>
#welcome {
  width: 100%;
  height: 100vh;
}
/* 容器的样式 */
.container {
  margin: auto;
  width: 650px;
  height: 550px;
  position: relative;
}

.welcome {
  background: #f6f6f6;
  width: 650px;
  height: 415px;
  position: absolute;
  top: 15%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.mainbox {
  position: absolute;
  top: -10%;
  left: 5%;
  background: skyblue;
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  z-index: 2;
}
.nodisplay {
  display: none;
  transition: all 0.5s ease;
}
.leftbox, .rightbox {
  position: absolute;
  width: 50%;
  transition: 1s all ease;
}
.leftbox {
  left: -2%;
}
.rightbox {
  right: -2%;
}
/* 字体、按钮、图片样式 */
h1 {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  margin-top: 95px;
  text-transform: uppercase;
  color: #f6f6f6;
  font-size: 2em;
  letter-spacing: 8px;
}
.title {
  font-family: "Lora",serif;
  color: #8e9aaf;
  font-size: 1.8em;
  line-height: 1.1em;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 300;
  margin-top: 20%;
}
.desc {
  margin-top: -8px;
}
.account {
  margin-top: 45%;
  font-size: 10px;
}
p {
  font-family: "Open Sans",sans-serif;
  font-size: 0.7em;
  letter-spacing: 2px;
  color: #8e9aaf;
  text-align: center;
}
span {
  color: #b2e1e9;
}
.picture {
  position: absolute;
  width: 130px;
  height: 130px;
  top: 45%;
  left: 30%;
  opacity: 0.8;
}
.smaller {
  width: 130px;
  height: 130px;
  top: 48%;
  left: 30%;
  opacity: 0.9;
}
button {
  padding: 12px;
  font-family: "Open Sans",sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 11px;
  border-radius: 10px;
  margin: auto;
  outline: none;
  display: block;
}
button:hover {
  background: skyblue;
  color: #fff;
  transition: background-color 0.2s ease-out;
}
.button {
  margin-top: 3%;
  background: #f6f6f6;
  color: #706e6e;
  border: solid 1px skyblue;
}
/* 表单样式 */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7px;
}
.more-padding {
  padding-top: 35px;
}
.more-padding input {
  padding: 12px;
}
.more-padding .submit {
  margin-top: 45px;
}
.submit {
  margin-top: 25px;
  padding: 12px;
  border-color: skyblue;
}
.submit:hover {
  /* background: #cbc0d3; */
  border-color: #fff;
}
input {
  background-color: skyblue;
  width: 65%;
  color: rgb(240, 239, 239);
  border: none;
  border-bottom: 1px solid rgba(246,246,246,0.7);
  padding: 9px;
  font-weight: 100;
}
input::placeholder {
  color: #f6f6f6;
  letter-spacing: 2px;
  font-size: 1.0em;
  font-weight: 100;
}
input:focus {
  color: #fff;
  outline: none;
  border-bottom: 1.2px solid rgba(27, 150, 199, 0.7);
  font-size: 1.0em;
  transition: 0.2s all ease;
}
input:focus::placeholder {
  opacity: 0;
}
label {
  font-family: "Open Sans",sans-serif;
  color: #fff;
  font-size: 0.8em;
  letter-spacing: 1px;
}
.checkbox {
  position: relative;
  display: inline;
  white-space: nowrap;
  left: -52px;
  top: 25px;
}
input[type=checkbox] {
  width: 15px;
  background: skyblue;
}

</style>