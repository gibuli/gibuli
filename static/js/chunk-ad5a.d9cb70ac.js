(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ad5a"],{Ppf0:function(t,e,n){"use strict";n.r(e);var a=n("jHpe"),r=n.n(a),s=(n("y1X9"),n("QWvX"),n("ZgVT"),n("bPOv"),n("hnpa"),n("PYIv"),n("45FF"),n("c2Kr"),n("9SXm"),n("26Sd"),n("Te+H"),n("+pfR"),{data:function(){return{}},mounted:function(){r.a.highlightAll(),this.bindEvent()},methods:{bindEvent:function(){}}}),i=(n("sIt/"),n("KHd+")),l=Object(i.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"30px"}},[n("div",[n("strong",[t._v("日期比较")])]),t._v(" "),n("div",{staticStyle:{width:"800px"}},[n("pre",[n("code",{staticClass:"language-js"},[t._v('\n        function compareDay(a, b) {\n            var arr = a.split("-");\n            var starttime = new Date(arr[0], arr[1], arr[2]);\n            var starttimes = starttime.getTime();\n            var arrs = b.split("-");\n            var lktime = new Date(arrs[0], arrs[1], arrs[2]);\n            var lktimes = lktime.getTime();\n            if (starttimes >= lktimes) {\n                return false;\n            } else {\n                return true;\n            }\n        }\n\n        compareDay("2013-08-24","2013-08-27") // true\n    ')])])]),t._v(" "),n("div",[n("strong",[t._v("获取当天日期")])]),t._v(" "),n("div",{staticStyle:{width:"800px"}},[n("pre",[n("code",{staticClass:"language-js"},[t._v("\n        function getCurDate() {\n            var dateObj = new Date();\n            var s = '',curMon = dateObj.getMonth() + 1,curDay = dateObj.getDate();\n            s += dateObj.getFullYear() + '-';\n            s += (curMon < 10?'0' + curMon:curMon) + \"-\";\n            s += (curDay < 10?'0' + curDay:curDay);\n            return(s);   \n        }\n\n        getCurDate() // \"2019-06-19\"\n    ")])])]),t._v(" "),n("div",[n("strong",[t._v("格式化日期")])]),t._v(" "),n("div",{staticStyle:{width:"800px"}},[n("pre",[n("code",{staticClass:"language-js"},[t._v('\n        Date.prototype.format = function (style) { var o = { "M+": this.getMonth() + 1, "d+": this.getDate(), "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "w+": "天一二三四五六".charAt(this.getDay()), "q+": Math.floor((this.getMonth() + 3) / 3), "S": this.getMilliseconds() }; if (/(y+)/.test(style)) { style = style.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)) } for (var k in o) { if (new RegExp("(" + k + ")").test(style)) { style = style.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)) } } return style };\n\n        new Date(new Date().getTime() - 60 * 60 * 24 * 6 * 1000).format("yyyy-MM-dd");//6天前\n    ')])])]),t._v(" "),n("div",[n("strong",[t._v("计算日期天数之差")])]),t._v(" "),n("div",{staticStyle:{width:"800px"}},[n("pre",[n("code",{staticClass:"language-js"},[t._v('\n        function getDays(strDateStart,strDateEnd){\n            var strSeparator = "-"; //日期分隔符\n            var oDate1;\n            var oDate2;\n            var iDays;\n            oDate1= strDateStart.split(strSeparator);\n            oDate2= strDateEnd.split(strSeparator);\n            var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);\n            var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);\n            iDays = parseInt(Math.abs(strDateS - strDateE )/1000/60/60/24)//把相差的毫秒数转换为天数 \n            return iDays ;\n        }\n\n        getDays("2013-05-23","2013-08-05") // 74\n    ')])])]),t._v(" "),n("div",[n("strong",[t._v("返回多少时间前")])]),t._v(" "),n("div",{staticStyle:{width:"800px"}},[n("pre",[n("code",{staticClass:"language-js"},[t._v('\n        function getDateDiff(dateTimeStamp) {\n            var now = new Date().getTime();\n            var minute = 1000 * 60;\n            var hour = minute * 60;\n            var day = hour * 24;\n            var halfamonth = day * 15;\n            var month = day * 30;\n            var result;\n            var diffValue = now - dateTimeStamp;\n            // if (diffValue < 0) {\n            // \t//若日期不符则弹出窗口告之\n            // \t//alert("结束日期不能小于开始日期！");\n            // }\n\n            var monthC = diffValue / month;\n            var weekC = diffValue / (7 * day);\n            var dayC = diffValue / day;\n            var hourC = diffValue / hour;\n            var minC = diffValue / minute;\n\n            if (monthC >= 1) {\n              result = "发表于" + parseInt(monthC) + "个月前";\n            } else if (weekC >= 1) {\n              result = "发表于" + parseInt(weekC) + "周前";\n            } else if (dayC >= 1) {\n              result = "发表于" + parseInt(dayC) + "天前";\n            } else if (hourC >= 1) {\n              result = "发表于" + parseInt(hourC) + "个小时前";\n            } else if (minC >= 1) {\n              result = "发表于" + parseInt(minC) + "分钟前";\n            } else\n              result = "刚刚发表";\n\n            return result;\n\n        }\n\n        getDateDiff(353110605597) //"发表于465个月前"\n    ')])])])])}],!1,null,"5a6539f3",null);l.options.__file="date.vue";e.default=l.exports},Rslx:function(t,e,n){},"sIt/":function(t,e,n){"use strict";var a=n("Rslx");n.n(a).a}}]);