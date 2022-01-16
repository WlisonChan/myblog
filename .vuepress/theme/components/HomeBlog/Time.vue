<template>
  <div class="container">
    <div class="headTitle">
      <h1 class="turn">William's Note</h1>
      <h2 class="turn">{{obj.output}}</h2>
      <div class="ckb turn">
        <div class="clock_box">
          <div class="clock">
            <p id="time"></p>
          </div>
        </div>
      </div>
      <button type="button" @click="enterPage" class="turn myButton">Go</button>
    </div>
  </div>
</template>

<script>
import EasyTyper from 'easy-typer-js'
export default {
  name: "Time",
  mounted: function () {
    let time = document.querySelector("#time");
    this.timer = setInterval(() => {
      this.up(time)
    }, 1000)
    const typed = new EasyTyper(this.obj, this.input,null,null)

  },
  data() {
    return {
      timer: '' ,
      obj: {
        output: 'Welcome',
        isEnd: false,
        speed: 100,
        singleBack: false,
        sleep: 2000,
        type: 'normal',
        backSpeed: 40,
        sentencePause: false
      },
      input:[' Welcome! ','这是笔记栖息地','这里有奇奇怪怪的技术','Let\'s Code for Future']
    }
  },
  methods: {
    enterPage () {
      this.$router.push('/blogs/')
    },
    up(time_el) {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      let day_night = "AM";

      if (h > 12) {
        h = h - 12;
        day_night = "PM";
      }

      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }

      time_el.textContent = h + ":" + m + ":" + s + " " + day_night;

    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  right: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.ckb {
  display: flex;
  justify-content: center;
}

.headTitle {
  width: 500px;
  height: 340px;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  max-width: 680px;
  display: block;
  box-shadow: rgb(0, 34, 34) 8px 8px 20px;
  border-radius: 10px;
  opacity: 1;
}
.myButton{
  margin-top: 20px;
  width: 120px;
  height: 50px;
  border-radius: 20px;
  outline:none;
  background-color: azure;
  font-size: 30px;
}
.turn {
  transition: all 1s !important;
}

.turn:hover {
  transform: scale(1.2);
}

html {
  font-size: 14px;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
}

.clock_box {
  position: relative;
  width: 420px;
  height: 140px;
  border-radius: 10px;
  background-image: linear-gradient(135deg, #c0ffff, #ffffff, #FFFF99);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animate 4s linear infinite;
}

.clock p {
  font-size: 50px;
  font-weight: bold;
  color: transparent;
  letter-spacing: 2px;
  background-image: linear-gradient(135deg, #c0ffff, #ffffff, #FFFF99);
  background-clip: border-box;
  -webkit-background-clip: text;
}

.clock_box::after, .clock_box::before {
  position: absolute;
  content: "";
  background-image: inherit;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  filter: blur(15px);
}

.clock_box::before {
  filter: blur(100px);
}

.clock {
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  background-color: #2b2a2a;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}

</style>
