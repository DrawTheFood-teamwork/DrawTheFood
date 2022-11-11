// pages/address/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    presetAddress:'/pages/presetaddress/presetaddress',
    result:'',
    animationBack: {},
    isChange:false
  },

  onpresetAddress(){
    wx.navigateTo({
      url: this.data.presetAddress,
    })
  },

  handleChoose() {
    const selectedAddress = app.globalData.selectedAddress
    const result = selectedAddress[parseInt(Math.random() * selectedAddress.length, 10)]
    this.setData({result:result})
    // 监控卡片动画
    app.globalData.isAddressCardAnimate=true
    if(!this.data.isChange){
      this.getAnimation()
    }
  },

  getAnimation() {
    this.animationBack.rotateY(90).step({
      duration:600
    })
    this.setData({animationBack: this.animationBack.export()})

    this.animationFace.rotateY(0).step({
      duration:600,
      delay:400
    })
    this.setData({
      animationFace: this.animationFace.export(),
      isChange:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
    var animationBack = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    var animationFace = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animationBack=animationBack
    this.animationFace=animationFace
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