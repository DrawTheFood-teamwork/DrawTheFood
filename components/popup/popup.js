Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    flag: true,
    _change:'',
    select_food:''
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hidePopup: function () {
      this.setData({
        flag: !this.data.flag
      })
    },
    //展示弹框
    showPopup (e) {
      const x = e.currentTarget.dataset.name;
      this.setData({
        e:e,
        select_food:x
      })
      this.setData({
        flag: !this.data.flag
      })
    },
    /*
    * triggerEvent 用于触发事件
    */
    _close() {
      this.triggerEvent("close");
    },

    _change(){
      // this.data._change();
      wx.setStorageSync('select_food', this.data.select_food)
      console.log(this.data.select_food);
      this.triggerEvent("close");
    }
  }
})
