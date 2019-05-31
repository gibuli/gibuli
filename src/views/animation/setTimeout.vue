<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>setTimeout</strong>
      <div id="demo"></div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;margin-top:200px;">
      <script
        type="text/plain"
        class="language-markup"
      >

        频率：
        60HZ = （T = 1/60）
        1秒钟刷新60次 = 一次 0.0167秒 = 一次 16.7ms
		卡顿的原因：
        setTimeout的执行步调和屏幕的刷新步调不一致
		1，屏幕刷新频率和屏幕分辨率，屏幕尺寸有关
		2，setTimeout的执行时间不确定，先完成主线程任务，然后再去异步队列，
        所以实际的执行时间是比设定的晚一些的
        
        <div id="demo"></div>
      </script>

      <pre><code class="language-scss">
        #demo{
			position: absolute;
			left:0;
			top:0;
			width: 100px;
			height: 100px;
			background: red;
		}
      </code></pre>

      <pre><code class="language-js">
        var oDemo = document.getElementById("demo");
        var start = null;
        function move() {
            var t = Date.now();
            if (!start) {
            start = Date.now();
            }
            var progress = t - start;
            oDemo.style.left = Math.min(progress / 10, 1000) + "px";
            if (progress < 10000) {
            window.setTimeout(move, 16);
            }
        }

        window.setTimeout(move, 16);
      </code></pre>

    </div>
    <!--code-->

  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
#demo {
  position: absolute;
  left: 0;
  top: 80px;
  width: 100px;
  height: 100px;
  background: red;
}
</style>
<script>
import Prism from "prismjs";

export default {
  data() {
    return {};
  },
  mounted() {
    Prism.highlightAll();
    this.bindEvent();
  },
  methods: {
    bindEvent() {
      var oDemo = document.getElementById("demo");
      var start = null;
      function move() {
        var t = Date.now();
        if (!start) {
          start = Date.now();
        }
        var progress = t - start;
        oDemo.style.left = Math.min(progress / 10, 1000) + "px";
        if (progress < 10000) {
          window.setTimeout(move, 16);
        }
      }

      window.setTimeout(move, 16);
    }
  }
};
</script>

