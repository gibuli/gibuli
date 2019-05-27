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
      <a href="#top1">回到顶部top1（是id的顶部）</a><br>
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

        <a href="#top1">回到顶部top1（是id的顶部）</a><br>
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
    this.bindEvent();
  },
  methods: {
    bindEvent() {}
  }
};
</script>

