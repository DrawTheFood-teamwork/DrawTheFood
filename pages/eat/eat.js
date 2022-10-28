// pages/eat/eat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    presetfoodURL:"/pages/presetfood/presetfood",
    name:'',
    foodDetail:[],
    autoplay:false,
    interval:50,
    duration:50,
    current:0,
    btnText:"命运抉择"
    },
  chooseFood(){
    if(this.data.btnText=="命运抉择"){
      this.setData({
        btnText:"随机",
        autoplay:true,
        interval:90,
        duration:90,
      })
    }else{
      let cont=0;
      let myInterval=setInterval(()=>{
        cont++;
        console.log(cont);
        if(cont<15){
          this.setData({
            autoplay:false,
          })
          this.setData({
            autoplay:true,
            interval:this.data.interval+20,
            duration:this.data.duration+20
          })
        }else{
          this.setData({
            autoplay:false,
            btnText:"命运抉择"
          })
          clearInterval(myInterval);
        }
      },300)
    }
  },

  /**
   * 
   */
  onPresetFood(){
    wx.navigateTo({
      url: this.data.presetfoodURL
    })
  },

  swiperChange(e){
    this.setData({
      current:e.detail.current
    })
  },

  onShow() {
    let foods = wx.getStorageSync('foods');
    if(foods) {
      this.setData({
        name:foods.name,
        foodDetail:foods.foodDetail.split(' ')
      })
    }
    console.log(this.data.name,this.data.foodDetail);
  }
})