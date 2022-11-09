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
    selectedAddress:["四饭二楼"],
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
  }
})
