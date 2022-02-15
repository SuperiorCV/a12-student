<template>
  <div id="confirm">
    <el-steps :active="active" simple finish-status="success">
      <el-step title="签署考试规则遵守承诺书"></el-step>
      <el-step title="人脸识别身份验证"></el-step>
      <el-step title="进入考试"></el-step>
    </el-steps>
    <div class="principle animate__animated animate__fadeInUp" v-if="active === 0" >
      <h2>考试规则承诺书：</h2>
      本人自愿参加考试，现郑重承诺：
      <ol>
        <li>
          本人已阅读并透彻地理解了考试的有关规定和纪律要求，愿意在考试中自
          觉遵守相关规定，保证按规定的程序和要求参加考试，如有违反，自愿接受处理。
        </li>
        <li>
          本人坚决服从考场工作人员和监考老师管理，自觉遵守考场纪律，诚实守信，不违规，不作
          弊。 　　
        </li>
        <li>
          本人报名时所提供的个人信息是真实、准确、完整的，如因个人信息错误、失真、缺失造成的
          不良后果，责任由本人承担。
        </li>
      </ol>
      <div id="button">
        <el-button type="primary" icon="el-icon-edit" @click="active = 1"
          >我承诺遵守考试规则</el-button
        >
      </div>
    </div>
    <div class="face animate__animated animate__fadeInUp" v-if="active === 1">
      <h2>人脸识别认证:</h2>
      请仔细阅读如下提示并进行人脸识别认证：
      <div class="tips">
        <ol>
          <li>接下来开始进行人脸识别认证，请点击下方按钮进行人脸识别认证</li>
          <li>
            为了保证成功认证，请平视摄像头同时人物处于中间扫描框内如右图所示
          </li>
          <li>考试期间还会再次弹出，届时请再次进行人脸识别认证</li>
        </ol>
        <img
          src="../../../static/images/waiting/face.png"
          alt=""
          height="100px"
        />
      </div>
      <div id="button">
        <el-button type="primary" @click="active = 2"
          ><i class="el-icon-upload el-icon--right"></i
          >开始进行人脸识别认证</el-button
        >
      </div>
    </div>
    <div class="start animate__animated animate__fadeInUp" v-if="active === 2">
      <div class="in-button">
        <span><i class="fad fa-angle-double-right"></i> 开始考试!</span>
        <a href="#">考</a>
        <a href="#">试</a>
        <a href="#">顺</a>
        <a href="#">利</a>
        <a href="#">！</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "confirm",

  data() {
    return {
      active: 0,
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>


<style scoped>
#confirm {
  width: 100%;
  min-height: 200px;
  /* background: pink; */
  margin-bottom: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  height: 300px;
  /* padding: 0 10px; */
}
#confirm .principle,
.face {
  margin-top: 10px;
}
#confirm h2 {
  margin: 0;
  font-family: SentyGoldenBell;
}
#button {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.tips {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tips img {
  padding: 10px;
  border: 1px dashed #000;
  border-radius: 4px;
}
.in-button {
  width: 280px;
  height: 80px;
  background: #cc3333;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
}

.in-button:hover {
  transform: scale(1.1);
}

.in-button span {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2d3436;
  color: #f1f1f1;
  text-align: center;
  line-height: 80px;
  z-index: 999;
  transition: 0.6s linear;
  border-radius: 40px;
}

.in-button:hover span {
  transform: translateX(-100%);
  transition-delay: 0.3s;
}

.in-button a {
  text-decoration: none;
  flex: 1;
  font-size: 22px;
  color: #fff;
  text-align: center;
  transform: translateX(-100%);
  opacity: 0;
  transition: 0.3s linear;
}

.in-button:hover a {
  opacity: 1;
  transform: translateX(0);
}

.in-button a:nth-of-type(1) {
  transition-delay: 1s;
}

.in-button a:nth-of-type(2) {
  transition-delay: 0.8s;
}

.in-button a:nth-of-type(3) {
  transition-delay: 0.6s;
}

.in-button a:nth-of-type(4) {
  transition-delay: 0.4s;
}
.start {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>