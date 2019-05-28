<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>css3-loading2</strong>
      <div class="demo8_2">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo8_2">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo8_2 {
            width: 70px;
            text-align: center;
            & > div {
                width: 18px;
                height: 18px;
                background-color: #333;
                border-radius: 100%;
                display: inline-block;
                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            }
            .bounce1 {
                -webkit-animation-delay: -0.32s;
                animation-delay: -0.32s;
            }
            .bounce2 {
                -webkit-animation-delay: -0.16s;
                animation-delay: -0.16s;
            }
        }

        @-webkit-keyframes sk-bouncedelay {
            0%,
            80%,
            100% {
                -webkit-transform: scale(0);
            }
            40% {
                -webkit-transform: scale(1);
            }
        }

        @keyframes sk-bouncedelay {
            0%,
            80%,
            100% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }
            40% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
      </code></pre>

    </div>
    <!--code-->

  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/layout-common.scss";
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
    bindEvent() {}
  }
};
</script>

