#### meta

##### 1. viewport

```
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

width 设置 viewport 宽度，为一个正整数，或字符串‘device-width’

height 设置 viewport 高度，一般设置了宽度，会自动解析出高度，可以不用设置

initial-scale 默认缩放比例，为一个数字，可以带小数

minimum-scale 允许用户最小缩放比例，为一个数字，可以带小数

maximum-scale 允许用户最大缩放比例，为一个数字，可以带小数

user-scalable 是否允许手动缩放

##### 2. 禁止电话号码或者邮箱跳转

```
<meta name="format-detection" content="telephone=no, email=no" />
```

---

#### css

取消半透明背景
-webkit-tap-highlight-color: rgba(0,0,0,0);

---

#### 事件

点击事件用 click
不用 touchstart 的原因：手动滚动屏幕轻触即触发

延迟解决方案：

fastclick： [https://github.com/ftlabs/fastclick](https://github.com/ftlabs/fastclick)

---

#### 判断 ua

```
function getClient () {
    if((/android/ig).test(window.navigator.userAgent)){//android
        return 'android';
    }else if((/(iPhone|iPad|iPod|iOS)/ig).test(window.navigator.userAgent)){//ios
        return 'ios';
    }else{
        return '';
    }
}
```

---

#### 键盘相关

##### 1，如何禁止点击输入框时弹出系统键盘？

方法 1：加 readonly

方法 2：

```
$("input").focus(function(){
    document.activeElement.blur();
});
```

##### 2，为了保证在输入时，如何让输入框不被键盘覆盖？

```
$("#search-form").find('input').on('click',function(){
    var that = this;
    setTimeout(function(){
        $(that).get(0).scrollIntoView(true);
        $(that).get(0).scrollIntoViewIfNeeded(true);
    },400)
});
```

##### 3，如何关闭键盘？

```
document.activeElement.blur();
```

---

#### 如何判断是否断网？

方法 1：navigator.onLine 可判断是否是脱机状态.

方法 2：

```
window.addEventListener('online',function(){},false)
window.addEventListener('offline',function(){},false)
```

方法 3：[https://github.com/hubspot/offline](https://github.com/hubspot/offline)

---

#### ios 时间戳显示 NaN 问题

ios5 版本 对 new Date 会有坑

因为低版本的 ios 不支持 new Date('2017-05-01')

只支持 new Date('2017/05/01')

参考：
[https://www.jianshu.com/p/5b62c1ca5b0c](https://www.jianshu.com/p/5b62c1ca5b0c)
[https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)

---

#### 调试

1，vConsole
[https://github.com/Tencent/vConsole](https://github.com/Tencent/vConsole)

2，chrome inspect（手机要安装 chrome）

3，fiddler（手机和 pc 要在一个局域网内）

参考：[https://yujiangshui.com/multidevice-frontend-debug/](https://yujiangshui.com/multidevice-frontend-debug/)
