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
        ]
    },
        
          checkboxChange(e) {
            console.log('checkbox发生change事件，携带value值为：', e.detail.value)
            const items = this.data.items
            const values = e.detail.value
            for (let i = 0, lenI = items.length; i < lenI; ++i) {
              items[i].checked = false
        
              for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (items[i].value === values[j]) {
                  items[i].checked = true
                  break
                }
              }
            }
        
            this.setData({
              items
            })
          }
    
});