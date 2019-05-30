<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>animation-fill-mode（默认：backwards）</strong>
      <div class="demo_ani demo_1">
        <div></div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo_ani demo_1">
            <div></div>
        </div>
      </script>

      <pre><code class="language-scss">
        @keyframes move{
		  0%{left:0}
		  100%{left:600px;}
		}

		.demo_ani{
			position: relative;
			height: 120px;
		}

		.demo_ani div{
			width: 100px;
			height: 100px;
			border:1px solid #000;
  			background:red;
  			position: absolute;
			top:0;
			left:0;
		}

		.demo_1 div.move{
			animation:move 2s;
		}
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>animation-fill-mode（forwards）</strong>
      <div class="demo_ani demo_2">
        <div></div>
      </div>

    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo_ani demo_2">
            <div></div>
        </div>
      </script>

      <pre><code class="language-scss">
        @keyframes move{
		  0%{left:0}
		  100%{left:600px;}
		}

		.demo_ani{
			position: relative;
			height: 120px;
		}

		.demo_ani div{
			width: 100px;
			height: 100px;
			border:1px solid #000;
  			background:red;
  			position: absolute;
			top:0;
			left:0;
		}

		.demo_2 div.move{
			animation:move 2s forwards;
		}
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>animation-direction（默认：normal）</strong>
      <div class="demo_ani demo_3">
        <div></div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo_ani demo_3">
            <div></div>
        </div>
      </script>

      <pre><code class="language-scss">
        @keyframes move{
		  0%{left:0}
		  100%{left:600px;}
		}

		.demo_ani{
			position: relative;
			height: 120px;
		}

		.demo_ani div{
			width: 100px;
			height: 100px;
			border:1px solid #000;
  			background:red;
  			position: absolute;
			top:0;
			left:0;
		}

		.demo_3 div.move{
			animation:move 2s forwards 6;/*0-600px 6次*/
		}
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>animation-direction（默认：alternate）</strong>
      <div class="demo_ani demo_4">
        <div></div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo_ani demo_4">
            <div></div>
        </div>
      </script>

      <pre><code class="language-scss">
        @keyframes move{
		  0%{left:0}
		  100%{left:600px;}
		}

		.demo_ani{
			position: relative;
			height: 120px;
		}

		.demo_ani div{
			width: 100px;
			height: 100px;
			border:1px solid #000;
  			background:red;
  			position: absolute;
			top:0;
			left:0;
		}

		.demo_4 div.move{
			animation-name:move;
			animation-duration:2s;/*单次走2s*/
			animation-timing-function:linear;
			animation-iteration-count:5;/*走5次，到端就算一次*/
			animation-fill-mode:forwards;
			animation-direction:alternate;/*连续性*/
			/*动画播放在第偶数次向前播放，第奇数次向反方向播放,默认第一次不算*/
		}
      </code></pre>

    </div>
    <!--code-->
    <br><br>
    <button id="resetBtn">重置所有</button>

  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: 600px;
  }
}

.demo_ani {
  position: relative;
  height: 120px;

  div {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    background: red;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.demo_1 div.move {
  animation: move 2s;
}

.demo_2 div.move {
  animation: move 2s forwards;
}

.demo_3 div.move {
  animation: move 2s forwards 6; /*0-600px 6次*/
}

.demo_4 div.move {
  animation-name: move;
  animation-duration: 2s; /*单次走2s*/
  animation-timing-function: linear;
  animation-iteration-count: 5; /*走5次，到端就算一次*/
  animation-fill-mode: forwards;
  animation-direction: alternate; /*连续性*/
  /*动画播放在第偶数次向前播放，第奇数次向反方向播放,默认第一次不算*/
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
      $(".demo_ani").on("click", function() {
        $(this)
          .find("div")
          .addClass("move");
      });

      $("#resetBtn").on("click", function() {
        $.each($(".demo_ani"), function(index, el) {
          $(el)
            .find("div")
            .removeClass("move");
        });
      });
    }
  }
};
</script>

