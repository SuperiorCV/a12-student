<template>
    <div id="singleMessage">
        <el-collapse  accordion>
            <el-collapse-item v-on:click.native="readed()">
                <template slot="title">
                    <div class="title">
                        {{mes.title}}    
                    </div>
                    <div class="state" v-isRead="mes.state"></div>
                    <div class="date" v-curTime="mes.date"></div>
                </template>
                <div>{{mes.msg}}</div>
            </el-collapse-item>
        </el-collapse>   
    </div>
</template>
<script>
export default {
    name: "singleMessage",
    props: {
        message: Object,
    },
    data() {
        return {
            mes: this.message,
        };
    },
    methods: {
        readed(){
            this.mes.state = 1;
        },
    },
    directives: {
        'isRead':function(el,binding,vnode){
            if(binding.value === 0){
                el.innerHTML = '未读';
            }
            else if(binding.value === 1){
                el.innerHTML = '已读';
                el.style.backgroundColor = 'rgb(214, 250, 214)';
                el.style.borderColor = 'rgb(145, 245, 145)';
                el.style.color = 'rgb(78, 194, 116)';
            }
        },
        'curTime':function(el,binding,vnode){
            var date = binding.value;
            date = date.replace(new RegExp("-","gm"),"/");
            var dateTimeStamp = (new Date(date)).getTime();
            let minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
            let hour = minute * 60;
            let day = hour * 24;
            let week = day * 7;
            // let halfamonth = day * 15;
            let month = day * 30;

            let now = new Date().getTime();   //获取当前时间毫秒
            let diffValue = now - dateTimeStamp;//时间差

            if (diffValue < 0) { return; }

            let minC = diffValue / minute;  //计算时间差的分，时，天，周，月
            let hourC = diffValue / hour;
            let dayC = diffValue / day;
            let weekC = diffValue / week;
            let monthC = diffValue / month;
            let result
            if (monthC >= 1) {
                result = "" + parseInt(monthC) + " months ago";
            }
            else if (weekC >= 1) {
                result = "" + parseInt(weekC) + " weeks ago";
            }
            else if (dayC >= 1) {
                result = "" + parseInt(dayC) + " days ago";
            }
            else if (hourC >= 1) {
                result = "" + parseInt(hourC) + " hours ago";
            }
            else if (minC >= 1) {
                result = "" + parseInt(minC) + " minutes ago";
            } else{
                result = " Just Now";
            }
            
            console.log(dateTimeStamp);
            console.log(now);
            el.innerHTML = result;

        },
    },
    
    
}
</script>
<style scoped>
.title {
    width: 70%;
}
.state {
    margin-left: 80px;
    width: 6%;
    height: 25px;
    background-color: rgba(250, 187, 187, 0.781);
    border-color: rgb(247, 104, 104);
    border-radius: 4px;
    color: rgb(252, 99, 99);
    line-height: 25px;
    text-align: center;
    font-weight: 800;
}
.date {
    display: inline-block;
    width: 20%;
    margin-left: 20px;
    color: gray;
}

</style>