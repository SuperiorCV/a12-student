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
        <transition-group appear>
          <single-message
            v-for="message in messages"
            :key="message.id"
            :message="message"
          >
          </single-message>
        </transition-group>
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
  methods: {
    readAll() {
      for (let i = 0; i < this.messages.length; i++) {
        this.messages[i].state = 1;
      }
    },
  },
  data() {
    return {
      messages: [
        {
          id: "1",
          title: "消息1",
          date: "2022-01-11 17:56:25",
          msg: "阿巴阿巴",
          state: 0,
        },
        {
          id: "2",
          title: "消息2",
          date: "2021-02-3 17:56:25",
          msg: "阿巴",
          state: 1,
        },
        {
          id: "3",
          title: "消息3",
          date: "2022-02-10 18:19:25",
          msg: "阿巴",
          state: 0,
        },
        {
          id: "4",
          title: "消息4",
          date: "2022-02-11 16:56:25",
          msg: "阿巴",
          state: 0,
        },
        {
          id: "5",
          title: "消息5",
          date: "2022-02-11 18:20:25",
          msg: "阿巴",
          state: 0,
        },
        {
          id: "6",
          title: "消息6",
          date: "2022-02-11 18:22:25",
          msg: "阿巴",
          state: 0,
        },
        {
          id: "7",
          title: "消息7",
          date: "2022-02-11 16:56:25",
          msg: "阿巴",
          state: 0,
        },
        {
          id: "8",
          title: "消息8",
          date: "2022-01-11 17:56:25",
          msg: "阿巴",
          state: 0,
        },
        {
          id: "9",
          title: "消息9",
          date: "2022-01-11 17:56:25",
          msg: "阿巴",
          state: 0,
        },
      ],
    };
  },
};
</script>


<style scoped>
#message {
  width: 100%;
  min-height: 100vh;
  background: rgba(247, 248, 250, 1);
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.container {
  margin-top: 10px;
  width: 100%;
  min-height: 100vh;
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
</style>