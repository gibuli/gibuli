<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>删除元素</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          
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

