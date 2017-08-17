# WebNotify

### What is WebNotify? ###

WebNotify是基于H5的Web Notifications API来实现的跨浏览器桌面通知解决方案。Notifications API允许现代浏览器（如Chrome，Safari，Firefox和Opera）将通知推送到用户的桌面，这是官方规范的一个新增功能。

## Install
#### npm

```
npm install web-notify.js --save-dev
```

#### or yarn

```
yarn add web-notify.js --save-dev
```


## Quick Start
#### Creating Your First Notification
```javascript
WebNotify.create('Hello World!')
```
#### Want more options? Just pass in a options object as the second parameter:
``` javascript
import WebNotify from 'web-notify.js'

let options = {
  tag: '标签',
  requireInteraction: true,
  body: `内容`,
  icon: '图片地址',
  onClick: function () {
    console.log('点击事件');
    this.close();//关闭通知
  }
}
WebNotify.create(title, options);
```
Html
```html
<script src="./wen-notify.js"></script>
<script type="text/javascript">
  WebNotify.create(title, options);
</script>
```
## API
Option     | Description
-------- | ---
title    | 标题
body     | 正文
tag      | 用于标识通知的唯一标签。
requireInteraction     | 设置为true时，通知将不会关闭，除非用户手动关闭或点击它
icon     | 可以是图标图像的URL或包含16x16和32x32像素图标图像的数组
onClick()     | 点击通知回调
onClose()     | 通知关闭回调
onError()     | 通知错误回调
onShow()      | 通知显示回调

## More
 [Web Notification API](https://developer.mozilla.org/zh-CN/docs/Web/API/notification/Using_Web_Notifications)
