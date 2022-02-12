<template>
  <div id="item" class="animate__animated animate__flipInX">
    <h2>{{ el.title }}</h2>
    <p id="duration">{{ el.duration }}</p>
    <p id="calendar">{{ el.startTime }}~{{ el.endTime }}</p>
    <p id="subject">{{ el.subject }}</p>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    el: Object,
  },
};
</script>

<style scoped>
#item {
  width: 100%;
  height: 70px;
  /* background: yellow; */
  border: 1px dotted #dddddd;
  transition: 0.2s;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#item:hover {
  background: #ecf0f1;
}
#item h2 {
  width: 200px;
  font-family: "SentyGoldenBell";
}
#item p {
  font-family: "hytmr";
  text-align: left;
}
#item #duration {
  width: 50px;
  text-align: left;
}
#item #calendar {
  width: 300px;
  color: grey;
}
#item #subject {
  width: 100px;
  color: grey;
}
</style>