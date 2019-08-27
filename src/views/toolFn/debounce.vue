<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>防抖（只要有新的动作进来，就重新计算时间再触发，所以只执行最后一次）</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          // immediate 表示第一次是否立即执行
          function debounce(fn, wait = 50, immediate) {
              let timer = null
              return function(...args) {
                  if (timer) clearTimeout(timer)

                    // ------ 新增部分 start ------ 
                    // immediate 为 true 表示第一次触发后执行
                    // timer 为空表示首次触发
                  if (immediate && !timer) {
                      fn.apply(this, args)
                  }
                    // ------ 新增部分 end ------ 

                  timer = setTimeout(() => {
                      fn.apply(this, args)
                  }, wait)
              }
          }

          // DEMO
          // 执行 debounce 函数返回新函数
          const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000, true)
          // 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
          window.addEventListener('resize', betterFn)

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

