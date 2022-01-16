<template>
  <section class="theme-container">
    <div class="container">
      <div class="bg"></div>
      <h1 class="text"><div>404</div>
        <div style="font-size: 25px">页面找不到...</div>
        <router-link to="/"><el-button>返回首页</el-button></router-link>
      </h1>
      <div class="outerRound"></div>
      <div class="innerRound"></div>

      <router-link to="/">Take me home.</router-link>
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
html,body{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.container{
  clear: both;
}
.text{
  text-align: center;
  z-index: 100;
  position: absolute;
  font-weight: bold;
  font-size: 100px;
  color: #ffffff;
  text-shadow: 0.15em 0.15em 0.08em #333;
  top: 50%;
  margin-top: -100px;
  left: 50%;
  margin-left: -100px;
}
.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #9adbbe;
}
.innerRound{
  border-radius: 50%;
  position: absolute;
  background: rgba(62,175,124,0.4);
  width: 700px;
  height: 700px;
  top: calc(50% - 350px);
  left: calc(50% - 350px);
  box-shadow: 0 0 20px 0.5px rgba(136,136,136,0.5) inset;
  animation: moveInner 8s infinite;
}
.outerRound{
  border-radius: 50%;
  position: absolute;
  background: rgba(74,191,138,0.5);
  width: 800px;
  height: 800px;
  top: calc(50% - 400px);
  left: calc(50% - 400px);
  box-shadow: 0 0 20px 0.5px rgba(136,136,136,0.5) inset;
  animation: moveOuter 6s infinite;
}
@keyframes moveInner {
  0%{
    transform: rotateX(0deg);
  }
  100%{
    transform: rotateX(360deg);
  }
}
@keyframes moveOuter {
  0%{
    transform: rotateY(0deg);
  }
  100%{
    transform: rotateY(-360deg);
  }
}
</style>

