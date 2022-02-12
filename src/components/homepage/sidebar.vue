<template>
  <div class="menu_container">
    <input type="checkbox" v-model="checked" id="menu" />
    <ul class="menu">
      <li style="--i: 1" @click="goto(0)">
        <a href="#"> <i class="fad fa-books"></i> 考试列表 </a>
      </li>
      <li style="--i: 2" @click="goto(1)">
        <a href="#"> <i class="fad fa-comments-alt"></i> 我的消息 </a>
      </li>
      <li style="--i: 3" @click="goto(2)">
        <a href="#"> <i class='fad fa-folder-open'></i> 我的试卷 </a>
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
          src="https://s3.bmp.ovh/imgs/2022/01/a714525bf61d4a6a.png"
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
  props: {
    checked: Boolean,
  },
  methods: {
    goto(i) {
      if (i === 0) {
        this.$router.push({ name: "exam" });
      } else if (i === 1) {
        this.$router.push({ name: "message" });
      } else if (i === 2) {
        this.$router.push({ name: "record" });
      }
    },
  },
};
</script>

<style scoped>
.menu_container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  user-select: none;
}

.menu_container input {
  position: fixed;
  top: -1100px;
  left: -1400px;
  opacity: 0;
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