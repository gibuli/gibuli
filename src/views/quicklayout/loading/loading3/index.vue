<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>css3-loading3</strong>
      <div class="demo8_3">
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
        <div class="demo8_3">
            <div></div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo8_3 {
            position: relative;
                div {
                    width: 24px;
                    height: 24px;
                    border: 2px solid #000;
                    border-top-color: transparent;
                    border-radius: 50%;
                    -webkit-animation: ploading 0.6s linear infinite;
                    animation: ploading 0.6s linear infinite;
                }
        }

        @keyframes ploading {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @-webkit-keyframes ploading {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
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

