(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-563c"],{"+lTs":function(t,i,n){"use strict";var s=n("FL8S");n.n(s).a},"/Yx2":function(t,i,n){},BiX5:function(t,i,n){"use strict";var s={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var i=window.pageYOffset,n=0;this.isMoving=!0,this.interval=setInterval(function(){var s=Math.floor(t.easeInOutQuad(10*n,i,-i,500));s<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):window.scrollTo(0,s),n++},16.7)}},easeInOutQuad:function(t,i,n,s){return(t/=s/2)<1?n/2*t*t+i:-n/2*(--t*(t-2)-1)+i}}},a=(n("MHt6"),n("KHd+")),e=Object(a.a)(s,function(){var t=this.$createElement,i=this._self._c||t;return i("transition",{attrs:{name:this.transitionName}},[i("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[i("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[i("title",[this._v("回到顶部")]),this._v(" "),i("g",[i("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},[],!1,null,"3ade483b",null);e.options.__file="index.vue";i.a=e.exports},FL8S:function(t,i,n){},MHt6:function(t,i,n){"use strict";var s=n("/Yx2");n.n(s).a},x9jV:function(t,i,n){"use strict";n.r(i);var s=n("jHpe"),a=n.n(s),e=(n("y1X9"),n("QWvX"),n("ZgVT"),n("bPOv"),n("hnpa"),n("PYIv"),n("45FF"),n("c2Kr"),n("9SXm"),n("26Sd"),n("Te+H"),n("+pfR"),{data:function(){return{myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},components:{BackToTop:n("BiX5").a},mounted:function(){a.a.highlightAll(),this.bindEvent()},methods:{bindEvent:function(){}}}),d=(n("+lTs"),n("KHd+")),v=Object(d.a)(e,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticStyle:{padding:"30px"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),n("back-to-top",{attrs:{"custom-style":t.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("（>）子元素选择器")]),this._v(" "),i("div",{staticClass:"demo5_1 pad10 warning"},[this._v("\n      div\n      "),i("p",{staticClass:"indent2 pad10 primary"},[this._v("p")]),this._v(" "),i("div",{staticClass:"indent2 pad10 danger"},[this._v("\n        div\n        "),i("p",{staticClass:"indent4 pad10 info"},[this._v("p")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_1 pad10 warning">\n        div\n        <p class="indent2 pad10 primary">p</p>\n        <div class="indent2 pad10 danger">\n          div\n          <p class="indent4 pad10 info">p</p>\n        </div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_1 {\n        & > p {\n          background-color: #000;\n          color: #fff;\n        }\n      }\n    ")])])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("strong",[t._v("（+）兄弟选择器（不包含上一个，和下下个）")]),t._v(" "),n("div",{staticClass:"demo5_2"},[n("div",{staticClass:"pad10 info"},[t._v("div1")]),t._v(" "),n("div",{staticClass:"demo5_2_2 pad10 info"},[t._v("div2")]),t._v(" "),n("div",{staticClass:"pad10 info"},[t._v("div3")]),t._v(" "),n("div",{staticClass:"pad10 info"},[t._v("div4")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_2">\n        <div class="pad10 info">div1</div>\n        <div class="demo5_2_2 pad10 info">div2</div>\n        <div class="pad10 info">div3</div>\n        <div class="pad10 info">div4</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_2 {\n        div {\n          &.demo5_2_2 {\n            & + div {\n              background-color: #000;\n              color: #fff;\n            }\n          }\n        }\n      }\n    ")])])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("strong",[t._v("（~）通用兄弟选择器（不包含上一个）")]),t._v(" "),n("div",{staticClass:"demo5_3"},[n("div",{staticClass:"pad10 info"},[t._v("div1")]),t._v(" "),n("div",{staticClass:"demo5_3_2 pad10 info"},[t._v("div2")]),t._v(" "),n("div",{staticClass:"pad10 info"},[t._v("div3")]),t._v(" "),n("div",{staticClass:"pad10 info"},[t._v("div4")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_3">\n        <div class="pad10 info">div1</div>\n          <div class="demo5_3_2 pad10 info">div2</div>\n          <div class="pad10 info">div3</div>\n          <div class="pad10 info">div4</div>\n        </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_3 {\n        div {\n          &.demo5_3_2 {\n            & ~ div {\n              background-color: #000;\n              color: #fff;\n            }\n          }\n        }\n      }\n    ")])])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("strong",[t._v("（[]）属性选择器")]),t._v(" "),n("div",{staticClass:"demo5_4"},[n("div",{attrs:{title:""}},[t._v("[title]，含title属性")]),t._v(" "),n("div",{attrs:{"data-abc":"123"}},[t._v('[data-abc="123"]，属性等于data-abc="123"')]),t._v(" "),n("div",{attrs:{"data-abc":"456 789"}},[t._v('[data-abc~="456"]，data-abc="456 789"，以空格隔开，其中包含456，但不包含456_1')]),t._v(" "),n("div",{attrs:{"data-abc":"456-789"}},[t._v('[data-abc|="456"]，data-abc="456-789"，以456-隔开')]),t._v(" "),n("div",{attrs:{"data-abc":"56789"}},[t._v('[data-abc^="5"]，data-abc="56789"，以5为开头')]),t._v(" "),n("div",{attrs:{"data-abc":"45678"}},[t._v('[data-abc$="8"]，data-abc="45678"，以8为结尾')]),t._v(" "),n("div",{attrs:{"data-abc":"abc"}},[t._v('[data-abc*="a"]，data-abc="abc"，包含a')])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_4">\n        <div title>[title]，含title属性</div>\n        <div data-abc="123">[data-abc="123"]，属性等于data-abc="123"</div>\n        <div data-abc="456 789">[data-abc~="456"]，data-abc="456 789"，以空格隔开，其中包含456，但不包含456_1</div>\n        <div data-abc="456-789">[data-abc|="456"]，data-abc="456-789"，以456-隔开</div>\n        <div data-abc="56789">[data-abc^="5"]，data-abc="56789"，以5为开头</div>\n        <div data-abc="45678">[data-abc$="8"]，data-abc="45678"，以8为结尾</div>\n        <div data-abc="abc">[data-abc*="a"]，data-abc="abc"，包含a</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v('\n      .demo5_4 {\n        div[title] {\n          background-color: red;\n        }\n        div[data-abc="123"] {\n          background-color: purple;\n        }\n        div[data-abc~="456"] {\n          background-color: pink;\n        }\n        div[data-abc|="456"] {\n          background-color: yellow;\n        }\n        div[data-abc^="5"] {\n          background-color: orange;\n        }\n        div[data-abc$="8"] {\n          background-color: gray;\n        }\n        div[data-abc*="a"] {\n          background-color: green;\n        }\n      }\n    ')])])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("strong",[t._v("（:）用户界面伪类选择器")]),t._v(" "),n("div",{staticClass:"demo5_5"},[n("a",{staticClass:"demo5_5_1",attrs:{href:"javascript:void(0);"}},[t._v("link")]),t._v(" "),n("a",{staticClass:"demo5_5_2",attrs:{target:"_blank",href:"http://www.so.com"}},[t._v("visited")]),t._v(" "),n("a",{staticClass:"demo5_5_3",attrs:{href:"javascript:void(0);"}},[t._v("hover")]),t._v(" "),n("a",{staticClass:"demo5_5_4",attrs:{href:"javascript:void(0);"}},[t._v("active")]),t._v(" "),n("input",{staticClass:"demo5_5_5",attrs:{value:"disabled",disabled:""}}),t._v(" "),n("input",{staticClass:"demo5_5_6",attrs:{type:"checkbox",checked:""}}),t._v(" "),n("div",{staticClass:"demo5_5_7"},[t._v("selection")]),t._v(" "),n("button",{staticClass:"demo5_5_8"},[t._v("focus")]),t._v(" "),n("div",{staticClass:"demo5_5_9",attrs:{lang:"zh"}},[t._v("lang")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_5">\n        <a class="demo5_5_1" href="javascript:void(0);">link</a>\n        <a class="demo5_5_2" target="_blank" href="http://www.so.com">visited</a>\n        <a class="demo5_5_3" href="javascript:void(0);">hover</a>\n        <a class="demo5_5_4" href="javascript:void(0);">active</a>\n        <input class="demo5_5_5" value="disabled" disabled />\n        <input class="demo5_5_6" type="checkbox" checked />\n        <div class="demo5_5_7">selection</div>\n        <button class="demo5_5_8">focus</button>\n        <div class="demo5_5_9" lang="zh">lang</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_5 {\n        a {\n          display: block;\n          width: 100px;\n        }\n      }\n      .demo5_5_1 {\n        &:link {\n          color: seagreen;\n        }\n      }\n      .demo5_5_2 {\n        &:visited {\n          color: orangered;\n        }\n      }\n      .demo5_5_3 {\n        &:hover {\n          color: dodgerblue;\n        }\n      }\n      .demo5_5_4 {\n        &:active {\n          color: violet;\n        }\n      }\n      .demo5_5_5 {\n        &:disabled {\n          background-color: lightgray;\n        }\n      }\n      .demo5_5_6 {\n        &:checked {\n          opacity: .5;\n        }\n      }\n      .demo5_5_7 {\n        &::selection {\n          color: tomato;\n        }\n      }\n      .demo5_5_8 {\n        &:focus {\n          color: turquoise;\n        }\n      }\n      .demo5_5_9 {\n        &:lang(zh) {\n          color: royalblue;\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("nth-child(3)，编号从1开始")]),this._v(" "),i("div",{staticClass:"demo5_6"},[i("div",[this._v("nth-child")]),this._v(" "),i("div",[this._v("从1开始")]),this._v(" "),i("div",[this._v("我是第三个")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_6">\n        <div>nth-child</div>\n        <div>从1开始</div>\n        <div>我是第三个</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_6 {\n        div {\n          &:nth-child(3) {\n            background-color: #000;\n            color: #fff;\n          }\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("nth-child(n+2),n从0开始")]),this._v(" "),i("div",{staticClass:"demo5_7"},[i("div",[this._v("nth-child")]),this._v(" "),i("div",[this._v("n从0开始")]),this._v(" "),i("div",[this._v("我是第三个")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_7">\n        <div>nth-child</div>\n        <div>n从0开始</div>\n        <div>我是第三个</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_7 {\n        div {\n          &:nth-child(n+2) {\n            background-color: #000;\n            color: #fff;\n          }\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("nth-child(even) <==> 2n , nth-child(odd) <==> 2n+1")]),this._v(" "),i("div",{staticClass:"demo5_8"},[i("div",[this._v("nth-child")]),this._v(" "),i("div",[this._v("even是偶数，odd是奇数")]),this._v(" "),i("div",[this._v("我是第三个")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_8">\n        <div>nth-child</div>\n        <div>even是偶数，odd是奇数</div>\n        <div>我是第三个</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_8 {\n        div {\n          &:nth-child(even) {\n            background-color: #000;\n            color: #fff;\n          }\n        }\n      }\n    ")])])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("strong",[t._v("nth-child(1) 相对“父”是子且顺序对就行")]),t._v(" "),n("div",{staticClass:"demo5_10"},[n("div",{staticClass:"indent2 pad10 primary"},[t._v("nth-child")]),t._v(" "),n("p",{staticClass:"indent2 pad10 danger"},[t._v("我是外面的p元素,算老二")]),t._v(" "),n("div",{staticClass:"indent2 pad10 warning"},[t._v("\n        div\n        "),n("p",{staticClass:"indent4 pad10 info"},[t._v("我是里面的p元素，算老大")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_10">\n        <div class="indent2 pad10 primary">nth-child</div>\n        <p class="indent2 pad10 danger">我是外面的p元素,算老二</p>\n        <div class="indent2 pad10 warning">\n          div\n          <p class="indent4 pad10 info">我是里面的p元素，算老大</p>\n        </div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_10 {\n        p {\n          &:nth-child(1) {\n            background-color: #000;\n            color: #fff;\n          }\n        }\n      }\n    ")])])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("strong",[t._v("nth-of-type(1)")]),t._v(" "),n("div",{staticClass:"demo5_11"},[n("div",{staticClass:"indent2 pad10 primary"},[t._v("nth-of-type")]),t._v(" "),n("p",{staticClass:"indent2 pad10 danger"},[t._v("我是外面的p元素,算老二")]),t._v(" "),n("div",{staticClass:"indent2 pad10 warning"},[t._v("\n        div\n        "),n("p",{staticClass:"indent4 pad10 info"},[t._v("我是里面的p元素，算老大")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_11">\n        <div class="indent2 pad10 primary">nth-of-type</div>\n        <p class="indent2 pad10 danger">我是外面的p元素,算老二</p>\n        <div class="indent2 pad10 warning">\n          div\n          <p class="indent4 pad10 info">我是里面的p元素，算老大</p>\n        </div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_11 {\n        p {\n          &:nth-of-type(1) {\n            background-color: #000;\n            color: #fff;\n          }\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("nth-last-child")]),this._v(" "),i("div",{staticClass:"demo5_9"},[i("div",[this._v("nth-last-child（nth-last-type同理，区别同上）")]),this._v(" "),i("div",[this._v("从最后开始算")]),this._v(" "),i("div",[this._v("我是最后一个")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_9">\n        <div>nth-last-child（nth-last-type同理，区别同上）</div>\n        <div>从最后开始算</div>\n        <div>我是最后一个</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_9 {\n        div {\n          &:nth-last-child(1) {\n            background-color: #000;\n            color: #fff;\n          }\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("first-child")]),this._v(" "),i("div",{staticClass:"demo5_12"},[i("div",[this._v("first-child（last-child同理，区别同上）")]),this._v(" "),i("div",[this._v("child和of-type的区别同上")]),this._v(" "),i("div",[this._v("我是最后一个")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_12">\n        <div>first-child（last-child同理，区别同上）</div>\n        <div>child和of-type的区别同上</div>\n        <div>我是最后一个</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_12 {\n        div {\n          &:first-child {\n            background-color: #000;\n            color: #fff;\n          }\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("only-child（only-of-type同理，区别同上）")]),this._v(" "),i("div",{staticClass:"demo5_13"},[i("div",[this._v("父元素只有一个子元素")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_13">\n        <div>父元素只有一个子元素</div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_13 {\n        div {\n          &:only-child {\n            background-color: #000;\n            color: #fff;\n          }\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("empty")]),this._v(" "),i("div",{staticClass:"demo5_14"},[i("div")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_14">\n        <div></div>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_14 {\n        div {\n          &:empty {\n            height: 20px;\n            background-color: red;\n          }\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("not")]),this._v(" "),i("div",{staticClass:"demo5_15"},[i("input",{attrs:{type:"text",value:"111"}}),this._v(" "),i("input",{attrs:{type:"submit",value:"222"}}),this._v(" "),i("input",{attrs:{type:"button",value:"333"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_15">\n        <input type="text" value="111" />\n        <input type="submit" value="222" />\n        <input type="button" value="333" />\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v('\n      .demo5_15 {\n        input {\n          &:not([type="submit"]) {\n            color: red;\n          }\n        }\n      }\n    ')])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("first-line")]),this._v(" "),i("div",{staticClass:"demo5_16"},[i("p",[this._v("我是第一行")]),this._v(" "),i("p",[this._v("我是第二行")]),this._v(" "),i("p",[this._v("我是第三行")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_16">\n        <p>我是第一行</p>\n        <p>我是第二行</p>\n        <p>我是第三行</p>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_16 {\n        &::first-line {\n          background-color: #000;\n          color: #fff;\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("first-letter")]),this._v(" "),i("div",{staticClass:"demo5_17"},[i("p",[this._v("首字的样式")]),this._v(" "),i("p",[this._v("我是第二行")]),this._v(" "),i("p",[this._v("我是第三行")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_17">\n        <p>首字的样式</p>\n        <p>我是第二行</p>\n        <p>我是第三行</p>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_17 {\n        &::first-letter {\n          background-color: #000;\n          color: #fff;\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("before")]),this._v(" "),i("div",{staticClass:"demo5_18"},[i("p",[this._v("我是before")]),this._v(" "),i("p",[this._v("我是第二行")]),this._v(" "),i("p",[this._v("我是第三行")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_18">\n        <p>我是before</p>\n        <p>我是第二行</p>\n        <p>我是第三行</p>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_18 {\n        &::before {\n          content: 'insert before';\n          background-color: #000;\n          color: #fff;\n        }\n      }\n    ")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("strong",[this._v("after")]),this._v(" "),i("div",{staticClass:"demo5_19"},[i("p",[this._v("我是after")]),this._v(" "),i("p",[this._v("我是第二行")]),this._v(" "),i("p",[this._v("我是第三行")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_19">\n        <p>我是after</p>\n        <p>我是第二行</p>\n        <p>我是第三行</p>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_19 {\n        &::after {\n          content: 'insert after';\n          background-color: #000;\n          color: #fff;\n        }\n      }\n    ")])])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("strong",[t._v("target")]),t._v(" "),n("div",{staticClass:"demo5_20"},[n("a",{attrs:{href:"#aa"}},[t._v("点我第一行高亮")]),t._v(" "),n("a",{attrs:{href:"#bb"}},[t._v("点我第二行高亮")]),t._v(" "),n("a",{attrs:{href:"#cc"}},[t._v("点我第三行高亮")]),t._v(" "),n("p",{attrs:{id:"aa"}},[t._v("我是第一行")]),t._v(" "),n("p",{attrs:{id:"bb"}},[t._v("我是第二行")]),t._v(" "),n("p",{attrs:{id:"cc"}},[t._v("我是第三行")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{width:"800px"}},[i("script",{staticClass:"language-markup",attrs:{type:"text/plain"}},[this._v('\n      <div class="demo5_20">\n        <a href="#aa">点我第一行高亮</a>\n        <a href="#bb">点我第二行高亮</a>\n        <a href="#cc">点我第三行高亮</a>\n        <p id="aa">我是第一行</p>\n        <p id="bb">我是第二行</p>\n        <p id="cc">我是第三行</p>\n      </div>\n    ')]),this._v(" "),i("pre",[i("code",{staticClass:"language-scss"},[this._v("\n      .demo5_20 :target {\n        background-color: #000;\n        color: #fff;\n      }\n    ")])])])}],!1,null,"14579ce0",null);v.options.__file="css3-selector.vue";i.default=v.exports}}]);