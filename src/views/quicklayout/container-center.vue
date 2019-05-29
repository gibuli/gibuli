<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>子容器（宽度不定,高度不定）水平垂直居中（transform）</strong>
      <div class="demo6_1">
        <p>我是不定宽不定高的内容，我是不定宽不定高的内容</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo6_1">
          <p>我是不定宽不定高的内容，我是不定宽不定高的内容</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo6_1{
          position: relative;
          width: 200px;
          height: 200px;
          font-size: 12px;
          background-color: lightgray;

          p {
            position: absolute;
            background-color: skyblue;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>子容器水平垂直居中（margin）</strong>
      <div class="demo6_5">
        <p>我这个容器是用来居中的</p>
      </div>

    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo6_5">
          <p>我这个容器是用来居中的</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo6_5 {
            position: relative;
            width: 200px;
            height: 200px;
            font-size: 12px;
            background-color: lightgray;
            
            p {
              width: 100px;
              height: 100px;
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              background-color: skyblue;
            }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>子容器水平垂直居中</strong>
      <div class="demo6_3">
        <p>我是内容，我是内容</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo6_3">
          <p>我是内容，我是内容</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo6_3 {
          position: relative;
          width: 200px;
          height: 200px;
          font-size: 12px;
          background-color: lightgray;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            background-color: skyblue;
          }
          
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>子容器水平垂直居中</strong>
      <div class="demo6_4">
        <p>我是内容，我是内容</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo6_4">
          <p>我是内容，我是内容</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo6_4 {
          position: relative;
          width: 200px;
          height: 200px;
          font-size: 12px;
          background-color: lightgray;
          display: table-cell;
          vertical-align: middle;
          text-align: center;

          p {
            background-color: skyblue;
          }

        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>子容器水平居中</strong>
      <div class="demo6_2">
        <p>我是内容，我是内容</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo6_2">
          <p>我是内容，我是内容</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo6_2 {
          
          position: relative;
          width: 200px;
          height: 200px;
          font-size: 12px;
          background-color: lightgray;

          p {
            display: table;
            margin: 0 auto;
            background-color: skyblue;
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

