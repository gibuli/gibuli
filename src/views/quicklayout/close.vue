<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>叉</strong>
      <div class="demo3_1">X</div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo3_1">X</div>
      </script>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>图片</strong>
      <div class="demo3_2">
        <img src="https://p4.ssl.qhimg.com/t01afe90e4c72ef8c4c.png" />
      </div>

    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo3_2">
            <img src="https://p4.ssl.qhimg.com/t01afe90e4c72ef8c4c.png" />
        </div>
      </script>

      <pre><code class="language-scss">
        .demo3_2{
            img{
                width:20px;
                height:20px;
            }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>伪元素</strong>
      <div class="demo3_3">
        <span class="close thick"></span>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo3_3">
            <span class="close thick"></span>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo3_3{
            .close {
                position: relative;
                display: inline-block;
                width: 20px;
                height: 20px;
                &::before {
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
                &::after {
                    -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }
            }
            .close.thick::before, .close.thick::after {
                height: 2px;
            }
            .close::before, .close::after {
                content: '';
                position: absolute;
                width: 100%;
                top: 50%;
                background: #000;
            }

        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>canvas</strong>
      <div class="demo3_4">
        <canvas id="close-canvas"></canvas>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo3_4">
            <canvas id="close-canvas"></canvas>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo3_4{
            canvas {
                width:20px;
                height:20px;
                background-color:#ffffff;
            }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>svg</strong>
      <div class="demo3_5">
        <svg
          width="30"
          height="30"
          viewPort="0 0 12 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="11"
            x2="11"
            y2="1"
            stroke="black"
            stroke-width="2"
          />
          <line
            x1="1"
            y1="1"
            x2="11"
            y2="11"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo3_5">
            <svg width="30" height="30"
                viewPort="0 0 12 12" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="11" 
                x2="11" y2="1" 
                stroke="black" 
                stroke-width="2"/>
            <line x1="1" y1="1" 
                x2="11" y2="11" 
                stroke="black" 
                stroke-width="2"/>
            </svg>
        </div>
      </script>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>渐变</strong>
      <div class="demo3_6">
        <a
          href="#"
          class="close-icon"
        ></a>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo3_6">
            <a href="#" class="close-icon"></a>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo3_6{
            .close-icon{
                display:inline-block;
                width:20px;
                height:20px;
                background: -webkit-linear-gradient(-45deg, transparent 0%, transparent 46%, black 46%, black 56%,transparent 56%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, black 46%, black 56%,transparent 56%, transparent 100%);
                background-color: #fff;
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
import { canvasCloseBtn } from "@/styles/layout-common";

export default {
  data() {
    return {};
  },
  mounted() {
    Prism.highlightAll();
    canvasCloseBtn();
    this.bindEvent();
  },
  methods: {
    bindEvent() {}
  }
};
</script>

