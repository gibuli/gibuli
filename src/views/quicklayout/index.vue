<template>
  <div class="app-container">
    <div style="width: 500px;">
   <pre><code class="language-css">
    @keyframes move{
      0%{left:0}
      100%{left:600px;}
    }

    .demo_ani{
      position: relative;
      height: 120px;
    }

    .demo_ani div{
      width: 100px;
      height: 100px;
      border:1px solid #000;
      background:red;
      position: absolute;
      top:0;
      left:0;
    }

    .demo11_1 div.move{
      animation:move 2s;
    }

    .demo11_2 div.move{
      animation:move 2s forwards;
    }

    .demo11_3 div.move{
      animation:move 2s forwards 6;/*0-600px 6次*/
    }
  </code></pre>
</div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>
<script>
import Prism from 'prismjs'

export default {
  
  data() {
    return {
      
    }
  },
  mounted(){
    Prism.highlightAll();
  },
  methods: {
    
  }
}
</script>
