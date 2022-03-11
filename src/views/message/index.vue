<template>
  <div id="message">
    <div class="container">
      <div class="tools">
        <p class="mesList">
          <i class="fad fa-comment-alt-smile"></i>&nbsp;我的消息
        </p>
        <p class="check" @click="readAll">
          <i class="fad fa-comment-alt-check"></i>全部已读
        </p>
      </div>
      <div>
        <transition-group appear v-if="messages.length > 0">
          <single-message
            v-for="message in messages"
            :key="message.id.mid"
            :message="message"
          >
          </single-message>
        </transition-group>
      </div>
      <div class="nomore-messages" v-if="messages.length <= 0">
        <h1><i class="fas fa-engine-warning"></i> 您暂时没有接收到任何消息</h1>
      </div>
    </div>
  </div>
</template>



<script>
import singleMessage from "../../components/message/singleMessage.vue";
export default {
  name: "message",
  components: {
    singleMessage,
  },
  created() {
    this.apis.message
      .getMessage(sessionStorage.getItem("username"))
      .then((res) => {
        let myMessage = res.data.result;
        for (let i = 0; i < myMessage.length; i++) {
          this.messages.push(myMessage[i]);
        }
      });
  },
  methods: {
    readAll() {
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].mstate === 0) {
          let Id = this.messages[i].id.mid;
          this.apis.message.read(Id).then((res) => {
            if(res.status === 200){
              this.messages[i].mstate = 1;
            }
          });
        }
      }
    },
  },
  data() {
    return {
      messages: [],
    };
  },
};
</script>


<style scoped>
#message {
  width: 98%;
  min-height: 100vh;
  background: rgba(247, 248, 250, 1);
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.container {
  margin-top: 10px;
  width: 100%;
  min-height: calc(100vh - 10px);
  border-radius: 4px;
  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.3); */
  overflow: hidden;
}
.mesList {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 25px;
  font-size: 1.2rem;
  font-family: "SentyGoldenBell";
}
.check {
  background: rgba(0, 10, 32, 0.05);
  padding: 0px 10px;
  border-radius: 8px;
  transition: 0.3s;
  font-size: 1.2rem;
  font-family: "SentyGoldenBell";
}
.check .fa-comment-alt-check {
  top: 2px;
  margin-right: 8px;
}
.check:hover {
  opacity: 0.8;
}
.tools {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.nomore-messages {
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: pink; */
  color: grey;
  font-family: SentyGoldenBell;
}
</style>