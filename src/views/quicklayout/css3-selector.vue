<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>（>）子元素选择器</strong>
      <div class="demo5_1 pad10 warning">
        div
        <p class="indent2 pad10 primary">p</p>
        <div class="indent2 pad10 danger">
          div
          <p class="indent4 pad10 info">p</p>
        </div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_1 pad10 warning">
          div
          <p class="indent2 pad10 primary">p</p>
          <div class="indent2 pad10 danger">
            div
            <p class="indent4 pad10 info">p</p>
          </div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_1 {
          & > p {
            background-color: #000;
            color: #fff;
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>（+）兄弟选择器（不包含上一个，和下下个）</strong>
      <div class="demo5_2">
        <div class="pad10 info">div1</div>
        <div class="demo5_2_2 pad10 info">div2</div>
        <div class="pad10 info">div3</div>
        <div class="pad10 info">div4</div>
      </div>

    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_2">
          <div class="pad10 info">div1</div>
          <div class="demo5_2_2 pad10 info">div2</div>
          <div class="pad10 info">div3</div>
          <div class="pad10 info">div4</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_2 {
          div {
            &.demo5_2_2 {
              & + div {
                background-color: #000;
                color: #fff;
              }
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>（~）通用兄弟选择器（不包含上一个）</strong>
      <div class="demo5_3">
        <div class="pad10 info">div1</div>
        <div class="demo5_3_2 pad10 info">div2</div>
        <div class="pad10 info">div3</div>
        <div class="pad10 info">div4</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_3">
          <div class="pad10 info">div1</div>
            <div class="demo5_3_2 pad10 info">div2</div>
            <div class="pad10 info">div3</div>
            <div class="pad10 info">div4</div>
          </div>
      </script>

      <pre><code class="language-scss">
        .demo5_3 {
          div {
            &.demo5_3_2 {
              & ~ div {
                background-color: #000;
                color: #fff;
              }
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>（[]）属性选择器</strong>
      <div class="demo5_4">
        <div title>[title]，含title属性</div>
        <div data-abc="123">[data-abc="123"]，属性等于data-abc="123"</div>
        <div data-abc="456 789">[data-abc~="456"]，data-abc="456 789"，以空格隔开，其中包含456，但不包含456_1</div>
        <div data-abc="456-789">[data-abc|="456"]，data-abc="456-789"，以456-隔开</div>
        <div data-abc="56789">[data-abc^="5"]，data-abc="56789"，以5为开头</div>
        <div data-abc="45678">[data-abc$="8"]，data-abc="45678"，以8为结尾</div>
        <div data-abc="abc">[data-abc*="a"]，data-abc="abc"，包含a</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_4">
          <div title>[title]，含title属性</div>
          <div data-abc="123">[data-abc="123"]，属性等于data-abc="123"</div>
          <div data-abc="456 789">[data-abc~="456"]，data-abc="456 789"，以空格隔开，其中包含456，但不包含456_1</div>
          <div data-abc="456-789">[data-abc|="456"]，data-abc="456-789"，以456-隔开</div>
          <div data-abc="56789">[data-abc^="5"]，data-abc="56789"，以5为开头</div>
          <div data-abc="45678">[data-abc$="8"]，data-abc="45678"，以8为结尾</div>
          <div data-abc="abc">[data-abc*="a"]，data-abc="abc"，包含a</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_4 {
          div[title] {
            background-color: red;
          }
          div[data-abc="123"] {
            background-color: purple;
          }
          div[data-abc~="456"] {
            background-color: pink;
          }
          div[data-abc|="456"] {
            background-color: yellow;
          }
          div[data-abc^="5"] {
            background-color: orange;
          }
          div[data-abc$="8"] {
            background-color: gray;
          }
          div[data-abc*="a"] {
            background-color: green;
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>（:）用户界面伪类选择器</strong>
      <div class="demo5_5">
        <a
          class="demo5_5_1"
          href="javascript:void(0);"
        >link</a>
        <a
          class="demo5_5_2"
          target="_blank"
          href="http://www.so.com"
        >visited</a>
        <a
          class="demo5_5_3"
          href="javascript:void(0);"
        >hover</a>
        <a
          class="demo5_5_4"
          href="javascript:void(0);"
        >active</a>
        <input
          class="demo5_5_5"
          value="disabled"
          disabled
        />
        <input
          class="demo5_5_6"
          type="checkbox"
          checked
        />
        <div class="demo5_5_7">selection</div>
        <button class="demo5_5_8">focus</button>
        <div
          class="demo5_5_9"
          lang="zh"
        >lang</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_5">
          <a class="demo5_5_1" href="javascript:void(0);">link</a>
          <a class="demo5_5_2" target="_blank" href="http://www.so.com">visited</a>
          <a class="demo5_5_3" href="javascript:void(0);">hover</a>
          <a class="demo5_5_4" href="javascript:void(0);">active</a>
          <input class="demo5_5_5" value="disabled" disabled />
          <input class="demo5_5_6" type="checkbox" checked />
          <div class="demo5_5_7">selection</div>
          <button class="demo5_5_8">focus</button>
          <div class="demo5_5_9" lang="zh">lang</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_5 {
          a {
            display: block;
            width: 100px;
          }
        }
        .demo5_5_1 {
          &:link {
            color: seagreen;
          }
        }
        .demo5_5_2 {
          &:visited {
            color: orangered;
          }
        }
        .demo5_5_3 {
          &:hover {
            color: dodgerblue;
          }
        }
        .demo5_5_4 {
          &:active {
            color: violet;
          }
        }
        .demo5_5_5 {
          &:disabled {
            background-color: lightgray;
          }
        }
        .demo5_5_6 {
          &:checked {
            opacity: .5;
          }
        }
        .demo5_5_7 {
          &::selection {
            color: tomato;
          }
        }
        .demo5_5_8 {
          &:focus {
            color: turquoise;
          }
        }
        .demo5_5_9 {
          &:lang(zh) {
            color: royalblue;
          }
        }
      </code></pre>
    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>nth-child(3)，编号从1开始</strong>
      <div class="demo5_6">
        <div>nth-child</div>
        <div>从1开始</div>
        <div>我是第三个</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_6">
          <div>nth-child</div>
          <div>从1开始</div>
          <div>我是第三个</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_6 {
          div {
            &:nth-child(3) {
              background-color: #000;
              color: #fff;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>nth-child(n+2),n从0开始</strong>
      <div class="demo5_7">
        <div>nth-child</div>
        <div>n从0开始</div>
        <div>我是第三个</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_7">
          <div>nth-child</div>
          <div>n从0开始</div>
          <div>我是第三个</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_7 {
          div {
            &:nth-child(n+2) {
              background-color: #000;
              color: #fff;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>nth-child(even) <==> 2n , nth-child(odd) <==> 2n+1</strong>
      <div class="demo5_8">
        <div>nth-child</div>
        <div>even是偶数，odd是奇数</div>
        <div>我是第三个</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_8">
          <div>nth-child</div>
          <div>even是偶数，odd是奇数</div>
          <div>我是第三个</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_8 {
          div {
            &:nth-child(even) {
              background-color: #000;
              color: #fff;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>nth-child(1) 相对“父”是子且顺序对就行</strong>
      <div class="demo5_10">
        <div class="indent2 pad10 primary">nth-child</div>
        <p class="indent2 pad10 danger">我是外面的p元素,算老二</p>
        <div class="indent2 pad10 warning">
          div
          <p class="indent4 pad10 info">我是里面的p元素，算老大</p>
        </div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_10">
          <div class="indent2 pad10 primary">nth-child</div>
          <p class="indent2 pad10 danger">我是外面的p元素,算老二</p>
          <div class="indent2 pad10 warning">
            div
            <p class="indent4 pad10 info">我是里面的p元素，算老大</p>
          </div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_10 {
          p {
            &:nth-child(1) {
              background-color: #000;
              color: #fff;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>nth-of-type(1)</strong>
      <div class="demo5_11">
        <div class="indent2 pad10 primary">nth-of-type</div>
        <p class="indent2 pad10 danger">我是外面的p元素,算老二</p>
        <div class="indent2 pad10 warning">
          div
          <p class="indent4 pad10 info">我是里面的p元素，算老大</p>
        </div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_11">
          <div class="indent2 pad10 primary">nth-of-type</div>
          <p class="indent2 pad10 danger">我是外面的p元素,算老二</p>
          <div class="indent2 pad10 warning">
            div
            <p class="indent4 pad10 info">我是里面的p元素，算老大</p>
          </div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_11 {
          p {
            &:nth-of-type(1) {
              background-color: #000;
              color: #fff;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>nth-last-child</strong>
      <div class="demo5_9">
        <div>nth-last-child（nth-last-type同理，区别同上）</div>
        <div>从最后开始算</div>
        <div>我是最后一个</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_9">
          <div>nth-last-child（nth-last-type同理，区别同上）</div>
          <div>从最后开始算</div>
          <div>我是最后一个</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_9 {
          div {
            &:nth-last-child(1) {
              background-color: #000;
              color: #fff;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>first-child</strong>
      <div class="demo5_12">
        <div>first-child（last-child同理，区别同上）</div>
        <div>child和of-type的区别同上</div>
        <div>我是最后一个</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_12">
          <div>first-child（last-child同理，区别同上）</div>
          <div>child和of-type的区别同上</div>
          <div>我是最后一个</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_12 {
          div {
            &:first-child {
              background-color: #000;
              color: #fff;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>only-child（only-of-type同理，区别同上）</strong>
      <div class="demo5_13">
        <div>父元素只有一个子元素</div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_13">
          <div>父元素只有一个子元素</div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_13 {
          div {
            &:only-child {
              background-color: #000;
              color: #fff;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>empty</strong>
      <div class="demo5_14">
        <div></div>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_14">
          <div></div>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_14 {
          div {
            &:empty {
              height: 20px;
              background-color: red;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>not</strong>
      <div class="demo5_15">
        <input
          type="text"
          value="111"
        />
        <input
          type="submit"
          value="222"
        />
        <input
          type="button"
          value="333"
        />
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_15">
          <input type="text" value="111" />
          <input type="submit" value="222" />
          <input type="button" value="333" />
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_15 {
          input {
            &:not([type="submit"]) {
              color: red;
            }
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>first-line</strong>
      <div class="demo5_16">
        <p>我是第一行</p>
        <p>我是第二行</p>
        <p>我是第三行</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_16">
          <p>我是第一行</p>
          <p>我是第二行</p>
          <p>我是第三行</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_16 {
          &::first-line {
            background-color: #000;
            color: #fff;
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>first-letter</strong>
      <div class="demo5_17">
        <p>首字的样式</p>
        <p>我是第二行</p>
        <p>我是第三行</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_17">
          <p>首字的样式</p>
          <p>我是第二行</p>
          <p>我是第三行</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_17 {
          &::first-letter {
            background-color: #000;
            color: #fff;
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>before</strong>
      <div class="demo5_18">
        <p>我是before</p>
        <p>我是第二行</p>
        <p>我是第三行</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_18">
          <p>我是before</p>
          <p>我是第二行</p>
          <p>我是第三行</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_18 {
          &::before {
            content: 'insert before';
            background-color: #000;
            color: #fff;
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>after</strong>
      <div class="demo5_19">
        <p>我是after</p>
        <p>我是第二行</p>
        <p>我是第三行</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_19">
          <p>我是after</p>
          <p>我是第二行</p>
          <p>我是第三行</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_19 {
          &::after {
            content: 'insert after';
            background-color: #000;
            color: #fff;
          }
        }
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>target</strong>
      <div class="demo5_20">
        <a href="#aa">点我第一行高亮</a>
        <a href="#bb">点我第二行高亮</a>
        <a href="#cc">点我第三行高亮</a>
        <p id="aa">我是第一行</p>
        <p id="bb">我是第二行</p>
        <p id="cc">我是第三行</p>
      </div>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">
      <script
        type="text/plain"
        class="language-markup"
      >
        <div class="demo5_20">
          <a href="#aa">点我第一行高亮</a>
          <a href="#bb">点我第二行高亮</a>
          <a href="#cc">点我第三行高亮</a>
          <p id="aa">我是第一行</p>
          <p id="bb">我是第二行</p>
          <p id="cc">我是第三行</p>
        </div>
      </script>

      <pre><code class="language-scss">
        .demo5_20 :target {
          background-color: #000;
          color: #fff;
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
  components: { BackToTop },
  mounted() {
    Prism.highlightAll();
    this.bindEvent();
  },
  methods: {
    bindEvent() {}
  }
};
</script>

