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
          link: "https://tinypng.com/",
          title: "png 压缩"
        },
        {
          link: "https://www.iconfont.cn",
          title: "iconfont"
        },
        {
          link: "https://www.uupoop.com/",
          title: "在线PS"
        },
        {
          link: "https://caniuse.com/",
          title: "caniuse"
        },
        {
          link: "http://screensiz.es/monitor",
          title: "设备尺寸"
        },
        {
          link: "http://www.cssdrive.com/css3button/",
          title: "设计按钮"
        },
        {
          link:
            "http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes",
          title: "监测Keycode"
        },
        {
          link: "https://www.jb51.net/onlineread/htmlchar.htm",
          title: "html特殊字符"
        },
        {
          link: "https://daneden.github.io/animate.css/?",
          title: "animate.css"
        },
        {
          link: "http://apps.eky.hk/css-triangle-generator/zh-hant",
          title: "三角生成器"
        },
        {
          link: "http://www.atool.org/html2markdown.php",
          title: "html markdown互转"
        },
        {
          link: "https://jinaconvert.com/cn/",
          title: "图片转换"
        },
        {
          link: "https://www.sass.hk/css2sass/",
          title: "css 转 sass"
        },
        {
          link: "https://loading.io/",
          title: "制作loading"
        },
        {
          link: "http://tool.oschina.net/regex/#",
          title: "正则测试"
        },
        {
          link: "http://geojson.io/#map=2/20.0/0.0",
          title: "地图json"
        },
        {
          link: "https://www.befunky.com/create/",
          title: "在线PS"
        }
      ]
    };
  },
  methods: {}
};
</script>
