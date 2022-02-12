<template>
  <div id="subject">
    <div id="main_container">

      <div id="left_container">
        试卷学科：
      </div>

      <el-radio-group v-model="subject_radio" id="right_container">
        <div v-for="(item,i) in subject_list" v-bind:key="i">
          <el-radio class="radio" border>{{item}}</el-radio>
        </div>
      </el-radio-group>

    </div>
  </div>
</template>


<script>
export default {
  name: "subject",

  data(){

    return{
      subject_list:['Chinese', 'math', 'English', 'physics', 'computer science', 'os'],
      subject_radio:"",
    }
  },

  methods: {
    
  }
};
</script>


<style scoped>
#main_container{
  display: flex;
  margin:10px;
}

#left_container{
  display: flex;
  justify-content: center;
  width: 100px;
}

#right_container{
  display: flex;
  flex-wrap:wrap;
  width: calc(100% - 100px);
}

#right_container .radio{
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>