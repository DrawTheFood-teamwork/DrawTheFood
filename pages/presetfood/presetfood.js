// pages/presetfood/presetfood.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['无偏好', '早餐', '午餐', '下午茶','晚餐','夜宵'],
    objectArray: [
      {
        id: 0,
        name: '无偏好',
        foodDetail:''
      },
      {
        id: 1,
        name: '早餐',
        foodDetail:''
      },
      {
        id: 2,
        name: '午餐',
        foodDetail:''
      },
      {
        id: 3,
        name: '下午茶',
        foodDetail:''
      },
      {
        id: 4,
        name: '晚餐',
        foodDetail:''
      },
      {
        id: 5,
        name: '夜宵',
        foodDetail:''
      }
    ],
    index: 0
  },

  bindPickerChange: function (e) {
    this.setData({
      index:e.detail.value
    })
    let index=this.data.index;
    let objectArray=this.data.objectArray;
    wx.setStorageSync('foods', objectArray[index])
  },

  userblur:function(e) {
    let index=this.data.index;
    let objectArray=this.data.objectArray;
    objectArray[index].foodDetail=e.detail.value;
    this.setData({
      objectArray:objectArray
    })
    wx.setStorageSync('foods', objectArray[index])
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})