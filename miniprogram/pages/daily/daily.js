Page({
    data:{
        currentdate:new Date().toLocaleDateString(),
        items: [
            {value: 'USA', name: '正常'},
            {value: 'CHN', name: '发热'},
            {value: 'BRA', name: '咳嗽'},
            {value: 'JPN', name: '头痛'},
            {value: 'ENG', name: '乏力'},
            {value: 'FRA', name: '胸闷'},
            {value: 'FRA', name: '厌食'},
            {value: 'FRA', name: '腹泻'},
        ],
        AMtemp:'',
        PMtemp:'',
    },
    checkboxChange(e) {
      
    },
    AMtempinputHandler(event){
      this.setData({
        AMtemp: event.detail.value || ''
      });
    },
    PMtempinput(event){
      this.setData({
        PMtemp:event.detail.value|| ''
      })
    },
    handleSubmit(event){
      wx.showToast({
        title: '上午温度：'+this.data.AMtemp,
      })
    }
});