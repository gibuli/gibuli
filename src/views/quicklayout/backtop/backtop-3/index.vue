<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>回到顶部</strong>
      <div id="top1">
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
      </div>
      <br><br><br>
      <button id="backBtn">回到顶部</button>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >

        <div id="top1">
          内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
          内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        </div>
      </script>

      <pre><code class="language-js">
        var anchor = document.getElementById("top1"); //获取锚点ID
        anchor.scrollIntoView(true);
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
    bindEvent() {
      $("#backBtn").on("click", function() {
        var anchor = document.getElementById("top1"); //获取锚点ID
        anchor.scrollIntoView(true);
      });
    }
  }
};
</script>

