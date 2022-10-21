// components/checkboxItem/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id:Number,
    value:String,
    allSelect:Boolean,
    checked:Boolean 
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  pageLifetimes: {
    show: function() {
      // 页面被展示
      // 初始化数据
      let addressSelected = app.globalData.selectedAddress
      if(addressSelected){
        for(let i = 0;i < addressSelected.length; i++){
          if(addressSelected[i] === this.data.value){
            this.setData({checked:true})
            break;
          }
        }
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      const status = this.data.checked
      let addressSelected = app.globalData.selectedAddress

      if(this.data.checked){
        addressSelected = addressSelected.filter(item => item !== this.data.value)
      } else {
        addressSelected.push(this.data.value)
      }
      this.setData({checked:!status})
      app.globalData.selectedAddress = addressSelected
      this.triggerEvent('observeall',{},{})
    },
  }
})
