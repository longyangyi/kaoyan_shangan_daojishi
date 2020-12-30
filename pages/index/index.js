//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    preTimeText: '距离2022考研(2021-12-25 08:00)还有: ',
    postTimeText: ''
  },
  //事件处理函数
  onLoad: function () {
    var that = this;

    var nowtime = Date.parse(new Date()); // timestamp
    var next21 = 1640390400000; // 2021-12-25 08:00:00
    var next22 = 1671840000000; // 2022-12-24 08:00:00
    if (nowtime > next21) {
      that.setData({
        preTimeText: '距离2023考研(2022-12-24 08:00)还有: ',
      });
    }
    if (nowtime > next22) {
      that.setData({
        preTimeText: '2023考研(2022-12-24)已完成！',
      });
    }

    setInterval(function () {
      var nowtime = Date.parse(new Date()); // timestamp
      var dateDiff = next21 - nowtime;
      if (nowtime > next21) {
        dateDiff = next22 -nowtime;
      }
      if (nowtime > next22) {
        clearInterval(this); // not sure
      }
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
      var leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
      var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
      var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
      var seconds = Math.round(leave3 / 1000);

      var postTimeString = dayDiff + "天" + hours + "时" + minutes + "分" + seconds + "秒"; //'';

      that.setData({
        postTimeText: postTimeString,
      });
    }, 1000);
  },
})