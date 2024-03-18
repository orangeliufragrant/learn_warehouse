<template>
  <div id="taiji"></div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
  mounted() {
    var m = document.getElementById("taiji"),
      lineLists = ",2,02,12,012,01,1,0";
    lineLists = lineLists.split(",");
    //四周的黑线
    for (let i = 0; i < 8; i++) {
      var newNode = document.createElement("div");
      newNode.classList.add("line");
      for (let j = 0; j < 3; j++) {
        let child = document.createElement("div");
        if (lineLists[i].indexOf(j) != -1) {
          let c1 = document.createElement("div"),
            c2 = document.createElement("div");
          child.classList.add("line2");
          c1.classList.add("line3");
          c2.classList.add("line4");
          child.appendChild(c1);
          child.appendChild(c2);
        } else {
          child.classList.add("line1");
        }
        newNode.appendChild(child);
      }
      newNode.style.transform = `rotate(${i * 45}deg)`;
      m.appendChild(newNode);
    }
    //太极图中间部分
    var newNode = document.createElement("div");
    newNode.classList.add("taiji");
    m.appendChild(newNode);
    console.log(m);
  },
};
</script>

<style lang="scss">
body {
  background: rgba(128, 128, 128, 0.2);
}
#taiji {
  margin: 50rpx auto;
  width: 300rpx;
  height: 300rpx;
  animation: rotate 8s linear infinite;
  animation-play-state: paused;
  animation-play-state: running;
}
.taiji {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: relative;
  margin: 200px auto;
  top: 150px;
  background-image: linear-gradient(to right, black 50%, white 50%);
}
.taiji::before,
.taiji::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
}
.taiji::before {
  background-color: white;
  border: 60px solid black;
  top: 0;
}
.taiji::after {
  background-color: black;
  border: 60px solid white;
  bottom: 0;
}
.line {
  width: inherit;
  height: inherit;
  transform-origin: 50% 50%;
  transition: all 0s;
  position: absolute;
}
.line1 {
  height: 10px;
  width: 80px;
  background-color: #000000;
  margin: 10px auto;
}
.line2 {
  display: flex;
  width: 80px;
  margin: 10px auto;
}
.line3,
.line4 {
  height: 10px;
  width: 35px;
  background-color: #000000;
}
.line4 {
  margin-left: 10px;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  /* 25%{
                transform: rotate(72deg);
            }
            50%{
                transform: rotate(144deg);
            }
            75%{
                transform: rotate(216deg);
            } */
  100% {
    transform: rotate(360deg);
  }
}
/* #taiji:hover{
			animation-play-state: running;
		} */
</style>
