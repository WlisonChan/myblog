<template>
  <div>
  <div class="taiji"></div>
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</template>

<style scoped>
.line1,.line2,.line3{
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  margin: auto;
}
.line1{
  width: 100px;
  height: 100px;
  border-width: 5px 0 2px 0;
  border-style: solid;
  border-color: #ccccff;
  border-radius: 50%;
  animation: move1 2s linear infinite;
}
.line2{
  width: 120px;
  height: 120px;
  border-width: 5px 0 2px 0;
  border-style: solid;
  border-color: #ccffcc;
  border-radius: 50%;
  animation: move2 1.5s linear infinite;
}
.line3{
  width: 140px;
  height: 140px;
  border-width: 5px 0 2px 0;
  border-style: solid;
  border-color: #ffcccc;
  border-radius: 50%;
  animation: move1 1s linear infinite;
}
.taiji{
  width: 40px;
  height: 80px;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  margin: auto;
  border-style: solid;
  border-color: #292929;
  border-width: 1px 40px 1px 1px;
  border-radius: 50%;
  animation: change 1s;/*参数1：动画名称；参数2：规定动画完成一个周期所花费的秒或毫秒。默认是 0。*/
  animation-iteration-count: infinite;/*设置动画次数无限[默认值是1]*/
  animation-timing-function: linear;/*使动画匀速旋转[默认值是ease，动画以低速开始，然后加快，在结束前变慢。]*/
}
.taiji:before {
  content: '';
  background: #292929;
  width: 8px;
  height: 8px;
  border: 16px solid #fff;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 0;
}
.taiji:after {
  content: '';
  background: #fff;
  width: 8px;
  height: 8px;
  border: 16px solid #292929;
  border-radius: 100%;
  position: absolute;
  right: -50%;
  bottom: 0;
}
/*@keyframes:规定动画。*/
@keyframes change {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
@keyframes move1 {
  0%{
    transform: rotateZ(0) ;
  }
  100%{
    transform: rotateZ(360deg);
  }
}
@keyframes move2 {
  0%{
    transform: rotateZ(0);
  }
  100%{
    transform: rotateZ(-360deg);
  }
}
</style>
