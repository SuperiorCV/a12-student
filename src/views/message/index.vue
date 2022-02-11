<template>
    <div id="message">
        <div class="container">
            <p class="mesList">消息列表</p>
            <div>
                <single-message
                v-for="message in messages"
                :key="message.id"
                :message="message">
                </single-message>
            </div>
        </div>
    </div>
</template>



<script>
import singleMessage from "../../components/message/singleMessage.vue";
export default {
    name: 'message',
    components: {
        singleMessage,
    },
    data() {
        return {
            messages: [
                {
                    id: "1",
                    title: "消息1",
                    date: '2022-01-11 17:56:25',
                    msg: "阿巴阿巴",
                    state: 0,
                },
                {
                    id: "2",
                    title: "消息2",
                    date: '2021-02-3 17:56:25',
                    msg: "阿巴",
                    state: 1,
                },
                {
                    id: "3",
                    title: "消息3",
                    date: '2022-02-10 18:19:25',
                    msg: "阿巴",
                    state: 0,
                },
                {
                    id: "4",
                    title: "消息4",
                    date: '2022-02-11 16:56:25',
                    msg: "阿巴",
                    state: 0,
                },
                {
                    id: "5",
                    title: "消息5",
                    date: '2022-02-11 18:20:25',
                    msg: "阿巴",
                    state: 0,
                },
                {
                    id: "6",
                    title: "消息6",
                    date: '2022-02-11 18:22:25',
                    msg: "阿巴",
                    state: 0,
                },
                {
                    id: "7",
                    title: "消息7",
                    date: '2022-02-11 16:56:25',
                    msg: "阿巴",
                    state: 0,
                },
                {
                    id: "8",
                    title: "消息8",
                    date: '2022-01-11 17:56:25',
                    msg: "阿巴",
                    state: 0,
                },
                {
                    id: "9",
                    title: "消息9",
                    date: '2022-01-11 17:56:25',
                    msg: "阿巴",
                    state: 0,
                },
            ],
        };
    },
}
</script>


<style scoped>
#message{
    width: 100%;
    min-height: 100vh;
    background: rgba(247, 248, 250, 1);
    overflow: hidden;
}
.container {
    margin: auto;
    margin-top: 60px;
    margin-bottom: 60px;
    width: 80%;
    height: 100%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 1px rgba(0,0,0,0.3) ;
    overflow: hidden;
}
.mesList {
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 25px;
}
</style>