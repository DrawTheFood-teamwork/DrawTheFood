// pages/presetaddress/presetaddress.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressArray:[
      {
        id:0,
        value:"一饭一楼",
      },
      {
        id:1,
        value:"一饭二楼",
      },
      {
        id:2,
        value:"二饭一楼",
      },
      {
        id:3,
        value:"二饭二楼",
      },
      {
        id:4,
        value:"三饭一楼",
      },
      {
        id:5,
        value:"三饭二楼",
      },
      {
        id:6,
        value:"四饭一楼",
      },
      {
        id:7,
        value:"四饭二楼",
      }
      ],
    allSelect:false
  },

  returnSelectedArray(data) {
    const arr = data.map(item => {
      return item.value
    })
    return arr
  },

  setAllSelect:function(){
    // 若点击之前为true
    let preAddress = this.data.addressArray
    const status = this.data.allSelect

    if(this.data.allSelect){
      preAddress.map(item => {
        item.checked = false
        return item
      })
    } else {
      preAddress.map(item => {
        item.checked = true
        return item
      })
    }
    app.globalData.selectedAddress = status? []:this.returnSelectedArray(this.data.addressArray)
    this.setData({addressArray:preAddress,allSelect:!status})
  },

  observeAll(e) {
    // 监控是否全选
    if(app.globalData.selectedAddress.length === this.data.addressArray.length){
      this.setData({allSelect:true})
    } else {
      this.setData({allSelect:false})
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options){
    // console.log(app.globalData.selectedAddress);
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