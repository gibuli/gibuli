<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>替换key</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          将value 替换为id
          var data = [
            {name:'a', value:'1'},
            {name:'b', value:'2'}
          ].map(function(item) {
              return {
                  name: item.name,
                  id: item.value
              }
          });
          
          输出：
          [
            {"name": "a", "id": "1"}, 
            {"name": "b", "id": "2"} 
          ]

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

