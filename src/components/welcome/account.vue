<template>
  <div id="account">
    <div class="tip">
      欢迎你加入本教考分离系统，初次账户创建您还需要完善以下个人信息！
    </div>
    <div class="l-wrapper">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="ruleForm"
      >
        <el-form-item prop="name">
          <el-input
            type="text"
            v-model="ruleForm.name"
            autocomplete="off"
            placeholder="请输入用户昵称(最大长度不能超过8位)"
            ><template slot="prepend">用户昵称:</template></el-input
          >
        </el-form-item>
        <el-form-item prop="phoneNumber">
          <el-input
            type="text"
            v-model="ruleForm.phoneNumber"
            autocomplete="off"
            placeholder="请输入手机号(长度为11位)"
            ><template slot="prepend">手机号码: +86</template></el-input
          >
        </el-form-item>
        <el-form-item prop="school">
          <el-input
            type="text"
            v-model="ruleForm.school"
            autocomplete="off"
            placeholder="请输入所就读学校名称"
            ><template slot="prepend">学校名称:</template></el-input
          >
        </el-form-item>
        <el-form-item prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择您的性别">
            <el-option label="男士" value="male"></el-option>
            <el-option label="女士" value="female"></el-option>
            <el-option label="不愿透露" value="none"></el-option>
          </el-select>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="r-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "account",
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户昵称"));
      } else if (value.trim() === "") {
        callback(new Error("用户昵称至少要包括一位非空符号"));
      } else {
        callback();
      }
    };
    var validatePhoneNumber = (rule, value, callback) => {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (value.length != 11 || !myreg.test(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validateSchool = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入就读学校"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        phoneNumber: "",
        school: "",
        sex: "",
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        phoneNumber: [{ validator: validatePhoneNumber, trigger: "blur" }],
        school: [{ validator: validateSchool, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
#account {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 1050px;
  height: 515px;
  position: absolute;
  border-radius: 5px;
  box-shadow: 5px 10px 20px 0px rgba(175 187 204 / 30%);
  padding: 100px 40px 40px 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tip {
  position: absolute;
  top: 40px;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: SentyGoldenBell;
  color: #ff6b6b;
}
.l-wrapper {
  width: 65%;
  height: 100%;
  /* background: green; */
  box-sizing: border-box;
  padding: 0 40px 0 0;
  display: flex;
  justify-content: stretch;
  align-items: center;
}
.ruleForm {
  width: 100%;
}
.r-wrapper {
  width: 35%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 0 0 40px;
}
</style>