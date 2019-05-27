<template>
  <div class="app-container">
    <!--priview-->
    <div>
      <strong>css3 滚动条1</strong>
      <div class="demo9_1">
        我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
        我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo9_1">
            我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
            我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
        </div>
      </script>

      <pre><code class="language-scss">
        .demo9_1{
            width: 200px;
            max-height: 200px;
            overflow: auto;
        }

        .demo9_1 {
            &::-webkit-scrollbar {
                width: 10px;
                background-color: #f5f5f5;
            }
            &::-webkit-scrollbar-track {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                background-color: #f5f5f5;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background-color: #555;
            }
        }
      </code></pre>
    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>css3 滚动条2</strong>
      <div class="demo9_2">
        我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
        我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo9_2">
            我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>
            我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>我是内容<br/>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo9_2{
            width: 200px;
            max-height: 200px;
            overflow: auto;
        }

        .demo9_2 {
            &::-webkit-scrollbar {
                width: 10px;
                background-color: #f5f5f5;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: linear-gradient(to left, #96a6bf, #63738c);
                -webkit-box-shadow: inset 0 0 1px 1px #5c6670;
                box-shadow: inset 0 0 1px 1px #5c6670;
            }
            &::-webkit-scrollbar-track {
                border-radius: 10px;
                background: #eee;
                -webkit-box-shadow: 0 0 1px 1px #bbb, inset 0 0 7px rgba(0,0,0,0.3);
                box-shadow: 0 0 1px 1px #bbb, inset 0 0 7px rgba(0,0,0,0.3);
            }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>css3 滚动条3</strong>
      <div class="demo9_3">
        我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
        我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo9_3">
            我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
            我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />我是内容<br />
        </div>
      </script>

      <pre><code class="language-scss">
        .demo9_3{
            width: 200px;
            max-height: 200px;
            overflow: auto;
        }

        .demo9_3 {
            &::-webkit-scrollbar {
                width: 10px;
                background-color: #f5f5f5;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: linear-gradient(to left, #fff, #e4e4e4);
                border: 1px solid #aaa;
            }
            &::-webkit-scrollbar-track {
                border-radius: 10px;
                background: rgba(0,0,0,0.1);
                border: 1px solid #ccc;
            }
        }
      </code></pre>

    </div>
    <!--code-->
    <back-to-top
      :custom-style="myBackToTopStyle"
      :visibility-height="300"
      :back-position="50"
      transition-name="fade"
    />
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/layout-common.scss";
</style>
<script>
import Prism from "prismjs";
import BackToTop from "@/components/BackToTop";

export default {
  components: { BackToTop },
  data() {
    return {
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        "border-radius": "4px",
        "line-height": "45px", // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: "#e7eaf1" // 按钮的背景颜色 The background color of the button
      }
    };
  },
  mounted() {
    Prism.highlightAll();
  },
  methods: {}
};
</script>
