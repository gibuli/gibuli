<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>回到顶部</strong>
      <div>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
      </div>
      <br><br><br>
      <a href="#top">回到顶部top（是最顶部，不需要id或者name也是可以办到的，貌似是默认支持的）</a><br>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
        内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>内容<br>
      </div>
      
      <a href="#top">回到顶部top（是最顶部，不需要id或者name也是可以办到的，貌似是默认支持的）</a><br>
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

