<template >
  <div style="padding:30px;">
    <!--priview-->
    <div>
      <strong>日期比较</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          function compareDay(a, b) {
              var arr = a.split("-");
              var starttime = new Date(arr[0], arr[1], arr[2]);
              var starttimes = starttime.getTime();
              var arrs = b.split("-");
              var lktime = new Date(arrs[0], arrs[1], arrs[2]);
              var lktimes = lktime.getTime();
              if (starttimes >= lktimes) {
                  return false;
              } else {
                  return true;
              }
          }

          compareDay("2013-08-24","2013-08-27") // true
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>获取当天日期</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          function getCurDate() {
              var dateObj = new Date();
              var s = '',curMon = dateObj.getMonth() + 1,curDay = dateObj.getDate();
              s += dateObj.getFullYear() + '-';
              s += (curMon < 10?'0' + curMon:curMon) + "-";
              s += (curDay < 10?'0' + curDay:curDay);
              return(s);   
          }

          getCurDate() // "2019-06-19"
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>格式化日期</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          Date.prototype.format = function (style) { var o = { "M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "w+": "天一二三四五六".charAt(this.getDay()), "q+": Math.floor((this.getMonth() + 3) / 3), "S": this.getMilliseconds() }; if (/(y+)/.test(style)) { style = style.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)) } for (var k in o) { if (new RegExp("(" + k + ")").test(style)) { style = style.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)) } } return style };

          new Date(new Date().getTime() - 60 * 60 * 24 * 6 * 1000).format("yyyy-MM-dd");//6天前
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>计算日期天数之差</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          function getDays(strDateStart,strDateEnd){
              var strSeparator = "-"; //日期分隔符
              var oDate1;
              var oDate2;
              var iDays;
              oDate1= strDateStart.split(strSeparator);
              oDate2= strDateEnd.split(strSeparator);
              var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
              var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
              iDays = parseInt(Math.abs(strDateS - strDateE )/1000/60/60/24)//把相差的毫秒数转换为天数 
              return iDays ;
          }

          getDays("2013-05-23","2013-08-05") // 74
      </code></pre>

    </div>
    <!--code-->

    <!--priview-->
    <div>
      <strong>返回多少时间前</strong>
    </div>
    <!--priview-->
    <!--code-->
    <div style="width:800px;">

      <pre><code class="language-js">
          function getDateDiff(dateTimeStamp) {
              var now = new Date().getTime();
              var minute = 1000 * 60;
              var hour = minute * 60;
              var day = hour * 24;
              var halfamonth = day * 15;
              var month = day * 30;
              var result;
              var diffValue = now - dateTimeStamp;
              // if (diffValue < 0) {
              // 	//若日期不符则弹出窗口告之
              // 	//alert("结束日期不能小于开始日期！");
              // }

              var monthC = diffValue / month;
              var weekC = diffValue / (7 * day);
              var dayC = diffValue / day;
              var hourC = diffValue / hour;
              var minC = diffValue / minute;

              if (monthC >= 1) {
                result = "发表于" + parseInt(monthC) + "个月前";
              } else if (weekC >= 1) {
                result = "发表于" + parseInt(weekC) + "周前";
              } else if (dayC >= 1) {
                result = "发表于" + parseInt(dayC) + "天前";
              } else if (hourC >= 1) {
                result = "发表于" + parseInt(hourC) + "个小时前";
              } else if (minC >= 1) {
                result = "发表于" + parseInt(minC) + "分钟前";
              } else
                result = "刚刚发表";

              return result;

          }

          getDateDiff(353110605597) //"发表于465个月前"
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

