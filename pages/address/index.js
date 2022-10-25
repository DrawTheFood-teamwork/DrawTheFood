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
    if(this.data.isChange){
      // this.changeAnimation()
    }else {
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

  changeAnimation() {
    this.animationFace.rotateY(-90).step({
      duration:600,
    })
    this.setData({
      animationFace: this.animationFace.export(),
    })

    this.animationBack.rotateY(0).step({
      duration:600,
      delay:400
    })
    this.setData({animationBack: this.animationBack.export()})

    console.log(this.data.animationBack);
    console.log(this.data.animationFace);

    this.animationBack.rotateY(180).step({
      duration:600,
      delay:1000
    })
    this.setData({animationBack: this.animationBack.export()})

    this.animationFace.rotateY(90).step({
      duration:600,
      delay:1000
    })
    this.setData({
      animationFace: this.animationFace.export(),
      isChange:true
    })
    console.log(this.data.animationBack);
    console.log(this.data.animationFace);
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