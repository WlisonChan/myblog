<template>
  <div class="box">
    <div v-for="o in 361" :key="o" class="day"></div>
  </div>
</template>

<script>
export default {
  name: 'MyCalendar',
  data(){
    return{
      arr:361
    }
  }
}
</script>
<style scoped>
.box{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 270px;
}
.day{
  width: 10px;
  height: 10px;
  background: #f0f2f4;
  margin: 1px;
}
</style>
