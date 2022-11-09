// pages/presetfood/presetfood.js
const app = getApp()
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
        // foodDetail:'粥 面包 馒头 全麦面包 馒头 粥类 杂粮 豆浆 脱脂牛奶 鸡蛋 苹果 蔬菜 油条 汉堡 蛋糕 饼干 薯条 火腿 方便面 北京烤鸭 泰餐 寿司 烧鸡 盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 关东煮 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 速冻水饺'
        foodDetail:'',
        food_Detail:['粥','面包','馒头','全麦面包','豆浆','脱脂牛奶','鸡蛋','苹果','蔬菜','油条','汉堡']
      },
      {
        id: 1,
        name: '早餐',
        foodDetail:'粥 面包 馒头 全麦面包 馒头 粥类 杂粮 豆浆 脱脂牛奶 鸡蛋 苹果 蔬菜 油条 汉堡 蛋糕 饼干 薯条 火腿 方便面'
      },
      {
        id: 2,
        name: '午餐',
        foodDetail:'北京烤鸭 泰餐 寿司 烧鸡 盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 关东煮 自助餐 炒面 快餐 水果 西北风 馄饨'
      },
      {
        id: 3,
        name: '下午茶',
        foodDetail:'喜茶 星巴克 C22 一点点 益禾堂 CoCo都可 茶理宜世 蜜雪冰城 奈雪の茶 古茗 书亦烧仙草 手挞柠檬茶 桃园三章'
      },
      {
        id: 4,
        name: '晚餐',
        foodDetail:'火锅 烧烤 泡面 速冻水饺 日本料理 涮羊肉 拉面 肯德基 面包 扬州炒饭 酸菜鱼 茶餐厅 海底捞 咖啡 比萨 麦当劳 兰州拉面 沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 竹笋烤肉'
      },
      {
        id: 5,
        name: '夜宵',
        foodDetail:'沙县小吃 烤鱼 海鲜 铁板烧 韩国料理 粥 快餐 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 竹笋烤肉'
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
  
  showPopup(e){
    this.popup.showPopup(e);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.popup = this.selectComponent("#popup");
  },

  _close() {
    console.log("你点击了关闭按钮");
    this.popup.hidePopup();
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