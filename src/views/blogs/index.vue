<template>
  <div class="app-container">
    <div
      v-for="(item,index) in list"
      :key="index"
    >
      <a
        target="_blank"
        :href="item.link"
      >{{item.title}}</a>
    </div>

  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
div {
  margin-bottom: 10px;
  a {
    color: dodgerblue;
    text-decoration: underline;
    font-size: 18px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      list: [
        {
          link: "https://juejin.im/",
          title: "掘金"
        },
        {
          link: "https://www.liaoxuefeng.com/",
          title: "廖雪峰"
        }
      ]
    };
  },
  methods: {}
};
</script>
