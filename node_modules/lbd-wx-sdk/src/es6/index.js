import wxNative from 'weixin-js-sdk'
import { axios } from 'castle-haozijunqaq-utils'

let wx = wxNative;

let apiList = [
  'updateAppMessageShareData',
  'updateTimelineShareData',
  'onMenuShareTimeline',
  'onMenuShareAppMessage',
  'onMenuShareQQ',
  'onMenuShareWeibo',
  'onMenuShareQZone',
  'startRecord',
  'stopRecord',
  'onVoiceRecordEnd',
  'playVoice',
  'pauseVoice',
  'stopVoice',
  'onVoicePlayEnd',
  'uploadVoice',
  'downloadVoice',
  'chooseImage',
  'previewImage',
  'uploadImage',
  'downloadImage',
  'translateVoice',
  'getNetworkType',
  'openLocation',
  'getLocation',
  'hideOptionMenu',
  'showOptionMenu',
  'hideMenuItems',
  'showMenuItems',
  'hideAllNonBaseMenuItem',
  'showAllNonBaseMenuItem',
  'closeWindow',
  'scanQRCode',
  'chooseWXPay',
  'openProductSpecificView',
  'addCard',
  'chooseCard',
  'openCard',
];

/**
 * 通过接口地址请求到的config进行配置
 * @param configUrl 接口地址
 * @param isDebug 是否开启调试
 */
function runWithUrl(configUrl, isDebug = false) {
  axios.getData(configUrl).then(({ data }) => {
    let config = data.data && data.data.config || {};
    wx.config({
      debug: isDebug, //  开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      jsApiList: apiList,// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      ...config,
    });
  })
}

/**
 * 设置需要开启的API列表
 * @param newApiList API列表
 */
function setApiList(newApiList) {
  apiList = newApiList
}

/**
 * 设置全部转发方式的配置信息
 * @param config
 */
function setShareConfig(config = {
  title: document.title,
  link: window.location.href,
}) {
  wx.ready(function () {
    wx.onMenuShareAppMessage(config);
    wx.onMenuShareTimeline(config);
    wx.onMenuShareQQ(config);
    wx.onMenuShareWeibo(config);
    wx.onMenuShareQZone(config);
  });
  wx.onMenuShareAppMessage(config);
  wx.onMenuShareTimeline(config);
  wx.onMenuShareQQ(config);
  wx.onMenuShareWeibo(config);
  wx.onMenuShareQZone(config);
}

wx.setApiList = setApiList;
wx.setShareConfig = setShareConfig;
wx.runWithUrl = runWithUrl;

if(typeof window === 'object') {
  window.wx = wx;
}

export default wx;

