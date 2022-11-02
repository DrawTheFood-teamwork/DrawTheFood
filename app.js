// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    selectedAddress:[
      "一饭一楼",
      "一饭二楼",
      "二饭一楼",
      "二饭二楼",
      "三饭一楼",
      "三饭二楼",
      "四饭一楼",
      "四饭二楼"
    ]
  }
})
