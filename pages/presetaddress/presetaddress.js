// pages/presetaddress/presetaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressArray:[
      {
        id:0,
        value:"一饭一楼",
        checked:true
      },
      {
        id:1,
        value:"一饭二楼"
      },
      {
        id:2,
        value:"二饭一楼"
      },
      {
        id:3,
        value:"二饭二楼"
      },
      {
        id:4,
        value:"三饭一楼"
      },
      {
        id:5,
        value:"三饭二楼"
      },
      {
        id:6,
        value:"四饭一楼"
      },
      {
        id:7,
        value:"四饭二楼"
      }
      ],
    allSelect:{
      value:'allselect',
      checked:false
    }
  },

  onselectAddresss:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const addressArray = this.data.addressArray
    const values = e.detail.value
    
    for (let i = 0, lenI = addressArray.length; i < lenI; ++i) {
      addressArray[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (addressArray[i].value === values[j]) {
          addressArray[i].checked = true
          break
        }
      }
    }

    this.setData({
      addressArray
    })
  },

  onallSelect:function(e){
    const value=e.detail.value
    const addressArray=this.data.addressArray
    if(value.length==1){
      for(let i=0; i<addressArray.length; i++){
        addressArray[i].checked=true;
      }
      this.setData({
        addressArray
      })
    }else{
      for(let i=0; i<addressArray.length; i++){
        addressArray[i].checked=false;
      }
      this.setData({
        addressArray
      })
    }
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