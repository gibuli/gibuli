<template>
  <div class="app-container">
    <!--priview-->
    <div>
      <strong>图+单行内容</strong>
      <div class="demo1_1">
        <img
          src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png"
          alt="图片"
        >
        <span class="des">我只有一行我只有一行我只有一行我只有一行</span>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo1_1">
            <img src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png" alt="图片">
            <span class="des">我只有一行我只有一行我只有一行我只有一行</span>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo1_1 {
          font-size: 0;
          img {
            vertical-align: middle;
          }
          span {
            display: inline-block;
            max-width: 120px;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
          }
        }
      </code></pre>
    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>图+标题+一行内容</strong>
      <div class="demo1_2">
        <img
          src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png"
          alt="图片"
        >
        <div>
          <p class="tit">我是标题我是标题</p>
          <p class="des">我是一行内容我是一行内容</p>
        </div>
      </div>
    </div>
    <!--priview-->

    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo1_2">
          <img src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png" alt="图片">
          <div>
            <p class="tit">我是标题我是标题</p>
            <p class="des">我是一行内容我是一行内容</p>
          </div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo1_2 {
          font-size: 0;
          img {
            vertical-align: middle;
          }
          div {
            display: inline-block;
            vertical-align: middle;
            font-size: 16px;
          }
          p {
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
          }
        }
      </code></pre>
    </div>
    <!--code-->
    <div>
      <strong>图+标题+2行内容</strong>
      <div class="demo1_3">
        <img
          src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png"
          alt="图片"
        >
        <div>
          <p class="tit">我是标题我是标题</p>
          <p class="des">我是主要内容我是主要内容</p>
          <p class="des">我是辅助内容我是辅助内容</p>
        </div>
      </div>
    </div>
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo1_3">
          <img src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png" alt="图片">
          <div>
            <p class="tit">我是标题我是标题</p>
            <p class="des">我是主要内容我是主要内容</p>
            <p class="des">我是辅助内容我是辅助内容</p>
          </div>
        </div>
      </script>
      <pre><code class="language-scss">
        .demo1_3 {
          font-size: 0;
          img {
            vertical-align: middle;
          }
          div {
            display: inline-block;
            vertical-align: middle;
            font-size: 16px;
          }
          p {
            max-width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
          }
        }
      </code></pre>
    </div>
    <div>
      <strong>图+标题+超过2行内容省略（兼容问题）</strong>
      <div class="demo1_4">
        <img
          src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png"
          alt="图片"
        >
        <div>
          <p class="tit">我是标题我是标题</p>
          <p class="des">我是多行内容我是多行内容我是多行内容我是多行内容我是多行内容</p>
        </div>
      </div>
    </div>
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo1_4">
          <img src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png" alt="图片">
          <div>
            <p class="tit">我是标题我是标题</p>
            <p class="des">我是多行内容我是多行内容我是多行内容我是多行内容我是多行内容</p>
          </div>
        </div>
      </script>
      <pre><code class="language-scss">
        .demo1_4 {
          font-size: 0;
          img {
            vertical-align: middle;
          }
          div {
            max-width: 120px;
            font-size: 16px;
            display: inline-block;
            vertical-align: middle;
          }
          p {
            &.tit {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &.des {
              display: -webkit-box;
              height: 44px;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }
        }
      </code></pre>
    </div>

    <div>
      <strong>图+标题+超过2行内容省略（伪元素）</strong>
      <div class="demo1_5">
        <img
          src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png"
          alt="图片"
        >
        <div>
          <p class="tit">我是标题我是标题</p>
          <p class="des">我是多行内容我是多行内容我是多行内容我是多行内容我是多行内容</p>
        </div>
      </div>
    </div>

    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo1_5">
          <img src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png" alt="图片">
          <div>
            <p class="tit">我是标题我是标题</p>
            <p class="des">我是多行内容我是多行内容我是多行内容我是多行内容我是多行内容</p>
          </div>
        </div>
      </script>
      <pre><code class="language-scss">
        .demo1_5 {
          font-size: 0;
          img {
            vertical-align: middle;
          }
          div {
            max-width: 120px;
            font-size: 16px;
            display: inline-block;
            vertical-align: middle;
          }
          p {
            &.tit {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &.des {
              position: relative;
              max-height: 2.7em;
              overflow: hidden;
              &::before {
                content: "...";
                position: absolute;
                z-index: 1;
                bottom: 0;
                right: 0;
                width: 1.5em;
                padding-left: 3px;
                box-sizing: border-box;
                background-color: white;
              }
              &::after {
                content: "";
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                background-color: white;
              }
            }
          }
        }
      </code></pre>
    </div>

    <div>
      <strong>图+标题+超过2行内容省略（js）</strong>
      <div class="demo1_6">
        <img
          src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png"
          alt="图片"
        >
        <div>
          <p class="tit">我是标题我是标题</p>
          <p class="des">我是多行内容我是多行内容我是多行内容我是多行内容我是多行内容</p>
        </div>
      </div>
    </div>

    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo1_6">
          <img src="https://p2.ssl.qhimg.com/t01eccbdc029ae523ab.png" alt="图片">
          <div>
            <p class="tit">我是标题我是标题</p>
            <p class="des">我是多行内容我是多行内容我是多行内容我是多行内容我是多行内容</p>
          </div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo1_6 {
          font-size: 0;
          img {
            vertical-align: middle;
          }
          div {
            max-width: 120px;
            font-size: 16px;
            display: inline-block;
            vertical-align: middle;
          }
          p {
            &.tit {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &.des {
              visibility: hidden;
            }
          }
        }
      </code></pre>

      <pre><code class="language-js">
          function layoutjs() {
              var $ele = $(".demo1_6 .des");
              var maxH = 44;
              if ($ele.height() <= maxH) {
                $ele.height("auto");
              } else {
                while ($ele.height() > maxH) {
                  $ele.text($ele.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                }
              }

              $ele.css("visibility", "visible");
          }

          layoutjs();
      </code></pre>
    </div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/layout-common.scss";
</style>
<script>
import Prism from "prismjs";

function layoutjs() {
  var $ele = $(".demo1_6 .des");
  var maxH = 44;
  if ($ele.height() <= maxH) {
    $ele.height("auto");
  } else {
    while ($ele.height() > maxH) {
      $ele.text($ele.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    }
  }

  $ele.css("visibility", "visible");
}

export default {
  data() {
    return {};
  },
  mounted() {
    Prism.highlightAll();
    layoutjs();
  },
  methods: {}
};
</script>
