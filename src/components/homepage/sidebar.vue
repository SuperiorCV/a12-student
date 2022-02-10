<template>
  <div class="menu_container">
    <input type="checkbox" name="open" id="open" />
    <label for="open" class="bt">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <ul class="menu">
      <li style="--i: 1">
        <a href="#"> Home </a>
      </li>
      <li style="--i: 2">
        <a href="#"> About </a>
      </li>
      <li style="--i: 3">
        <a href="#"> Info </a>
      </li>
      <li style="--i: 4">
        <a href="#"> Contact </a>
      </li>
      <li style="--i: 5">
        <a href="#"> Show me more </a>
      </li>
    </ul>
    <div class="profile">
      <div class="details">
        <img
          class="avatar"
          src="http://vclass.api.cheeseburgerim.space//VClass//static//defaultAvatar.jpg"
        />
        <span>langwenchong</span>
      </div>
      <i class="fad fa-sign-out"></i>
    </div>
  </div>
</template>


<script>
export default {
  name: "sidebar",
  mounted() {
    setTimeout(function () {
      document.getElementById("open").setAttribute("checked", "checked");
    }, 100);
  },
};
</script>

<style scoped>
.menu_container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  user-select: none;
}

.menu_container input {
  position: fixed;
  top: -1100px;
  left: -1400px;
  opacity: 0;
}

.menu_container .bt {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 60px;
  height: 45px;
  z-index: 999;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transform: scale(0.7);
}

.menu_container .bt span {
  position: relative;
  display: block;
  width: 100%;
  height: 9px;
  left: 0;
  border-radius: 9px;
  background-color: #ff6b6b;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  background-color: #666;
  box-shadow: rgba(102, 102, 102, 0.4) 0px 4px 12px;
}

.menu_container input:checked ~ .bt span {
  box-shadow: rgba(255, 107, 107, 0.4) 0px 4px 12px;
  background-color: #ff6b6b;
}

.menu_container input:checked ~ .bt span:nth-child(1) {
  transform: translateY(18px) rotate(-135deg);
}

.menu_container input:checked ~ .bt span:nth-child(2) {
  transform: translateX(60px);
  opacity: 0;
}

.menu_container input:checked ~ .bt span:nth-child(3) {
  transform: translateY(-18px) rotate(135deg);
}

.menu_container .menu {
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 150px;
  width: 300px;
  height: 100%;
  transform: translateX(-100%);
  background-color: #11101d;
  list-style: none;
  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

.menu_container input:checked ~ .menu {
  transform: translateX(0px);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.08);
}

.menu_container .menu li {
  font-size: 24px;
  margin: 10px 20px;
  transform: translateX(-50px);
  opacity: 0;
  text-align: right;
}

.menu_container input:checked ~ .menu li {
  transition: all 0.2s ease-out calc(var(--i) * 80ms + 200ms);
  transform: translateX(0px);
  opacity: 1;
}

.menu_container .menu a {
  border-radius: 8px;
  display: block;
  padding-right: 20px;
  line-height: 60px;
  text-decoration: none;
  color: #fff;
  /* background-color: #f1f1f1; */
  transition: all 0.4s ease;
}

.menu_container .menu a:hover {
  color: #000;
  background-color: #fff;
}
.menu_container .profile {
  height: 80px;
  width: 100%;
  background: #1d1b31;
  position: fixed;
  width: 340px;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu_container input:checked ~ .profile {
  transform: translateX(0px);
  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
.menu_container .profile .details {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
}
.menu_container .profile .details .avatar {
  width: 50px;
  height: 50px;
  border-radius: 12px;
}
.menu_container .profile .details span {
  font-size: 1.1rem;
  color: #fff;
  margin-left: 15px;
}
.menu_container .profile .fa-sign-out {
  transform: rotate(180deg);
  font-size: 25px;
  color: #fff;
}
</style>