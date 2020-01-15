##基于微信JSSDK的企业自用包

### 微信JSSDK原API没有改动，只新增扩展，原API见
[微信jssdk官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

### 包下载
```
npm下载
npm install lbd-wx-sdk -S

淘宝镜像下载
cnpm install lbd-wx-sdk -S
```

### 工程化使用ES6模块
```
import wx from 'lbd-wx-sdk'
```

### script引入使用
```
/node_modules/lbd-wx-sdk/dist/index.js 为源文件提取自用
```

### 新增方法

```
通过apiURL获取配置信息
@params {string} url 后端配置接口
@params {boolean} isDebug 是否开启debug模式
wx.runWithUrl(url, isDebug)

后端接口返回格式
{
    code: 200
    data: {
      config: {
        appId: **********
        nonceStr: **********
        rawString: **********
        signature: **********
        timestamp: **********
        url: **********
      }
    }
    msg: null
}
```

```
设置开启微信网页所有支持的分享方式配置
@params {object} config 配置信息
wx.setShareConfig(config)

config格式
{
    title: '', // 分享标题
    desc: '', // 分享描述
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    success: function () {
       // 用户确认分享后执行的回调函数
    },
    cancel: function () {
       // 用户取消分享后执行的回调函数
    }
}
```

```
设置JSSDK合法使用的API,默认全部开启。
@params {string[]} apiList 合法的API列表
wx.setApiList(apiList)
```

[具体API名称见微信jssdk官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)




