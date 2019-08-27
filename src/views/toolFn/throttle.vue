<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>节流（在频繁的操作下，规定时间内只执行一次）</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          // 函数节流非常适用于函数被频繁调用的场景，例如：window.onresize() 事件、mousemove 事件、上传进度等情况。
          // fn 是需要执行的函数
          // wait 是时间间隔
          const throttle = (fn, wait = 50) => {

            // 上一次执行 fn 的时间
            let previous = 0
            // 将 throttle 处理结果当作函数返回
            return function(...args) {
              console.log('频繁执行')
              // 获取当前时间，转换成时间戳，单位毫秒
              let now = +new Date()
              // 将当前时间和上一次执行函数的时间进行对比
              // 大于等待时间就把 previous 设置为当前时间并执行函数 fn
              if (now - previous > wait) {
                previous = now
                fn.apply(this, args)
              }
            }
          }

          // DEMO
          // 执行 throttle 函数返回新函数
          const betterFn = throttle(() => console.log('fn 函数执行了，在规定的一秒内只执行一次'), 1000)
          // 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn
          setInterval(betterFn, 10)

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

