// pages/presetfood/presetfood.js
const app = getApp()
Page({

  data: {
    array: '',
    objectArray: '',
    index: ''
  },

  bindPickerChange: function (e) {
    app.globalData.index=e.detail.value;
    let index=app.globalData.index;
    let objectArray=app.globalData.objectArray;
    wx.setStorageSync('foods', objectArray[index]);
    this.dataRefresh();
  },

  userblur:function(e) {
    let index=app.globalData.index;
    let objectArray=app.globalData.objectArray;
    objectArray[index].foodDetail=e.detail.value;
    app.globalData.objectArray=objectArray;
    wx.setStorageSync('foods', objectArray[index]);
    this.dataRefresh();
  },

  onLoad(options) {
    this.dataRefresh();
  },

  // 更新本页面data
  dataRefresh(){
    this.setData({
      array:app.globalData.array,
      objectArray:app.globalData.objectArray,
      index:app.globalData.index
    })
  },
  
  showPopup(e){
    this.popup.showPopup(e);
  },

  showPopup_add(e){
    this.popup_add.showPopup(e);
  },

  onReady() {
    this.popup = this.selectComponent("#popup");
    this.popup_add = this.selectComponent("#popup_add");
  },

  _close() {
    console.log("你点击了关闭按钮");
    this.dataRefresh();
    this.popup.hidePopup();
  },

  _close_add() {
    console.log("你点击了关闭按钮");
    this.dataRefresh();
    this.popup_add.hidePopup();
  }
})