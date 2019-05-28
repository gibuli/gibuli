<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>css3-loading1</strong>
      <div class="demo8_1">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo8_1">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo8_1 {
            width: 50px;
            height: 40px;
            text-align: center;
            font-size: 12px;
            & > div {
              background-color: #333;
              height: 100%;
              width: 6px;
              display: inline-block;
              -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
              animation: sk-stretchdelay 1.2s infinite ease-in-out;
            }
            .rect2 {
              -webkit-animation-delay: -1.1s;
              animation-delay: -1.1s;
            }
            .rect3 {
              -webkit-animation-delay: -1.0s;
              animation-delay: -1.0s;
            }
            .rect4 {
              -webkit-animation-delay: -0.9s;
              animation-delay: -0.9s;
            }
            .rect5 {
              -webkit-animation-delay: -0.8s;
              animation-delay: -0.8s;
            }
        }

        @-webkit-keyframes sk-stretchdelay {
          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
          20% { -webkit-transform: scaleY(1.0) }
        }

        @keyframes sk-stretchdelay {
          0%, 40%, 100% { 
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
          }  20% { 
            transform: scaleY(1.0);
            -webkit-transform: scaleY(1.0);
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

