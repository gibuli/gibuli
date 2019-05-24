<template>
  <div class="app-container">
    <!--priview-->
    <div>
      <strong>图标+文字</strong>
      <span
        class="demo2_1"
        data-likenum="10"
      ></span>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <span class="demo2_1" data-likenum="10"></span>
      </script>

      <pre><code class="language-scss">
        .demo2_1{
          display: inline-block;
          background: url("https://p4.ssl.qhimg.com/t01b7ac355f2e6eda37.png") no-repeat 0 center;
          padding-left:18px;
          &:after{
            content: attr(data-likenum);
          }
        }
      </code></pre>
    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>随着文字大小而变化</strong>
      <span class="demo2_2">
        <i class="el-icon-arrow-left"></i>后退
      </span>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <span class="demo2_2">
          <i class="el-icon-arrow-left"></i>后退
        </span>
      </script>

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
  },
  methods: {}
};
</script>
