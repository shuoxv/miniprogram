// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleitemtype(e){
            // 1 绑定点击事件 需要在methods中绑定
            // 2 获取被点击的索引
            // 3 获取原数组
            // 4 对数组循环
            //     1 给每一个循环属性 选中属性改为false
            //     2 给当前的索引项设置为true
            //     3 点击事件触发的时候，触发父组件中的自定义事件，同时传递数据给父组件
            // this.triggerEvent("父组件自定义事件的名称"，要传递的参数)
            const {index} = e.currentTarget.dataset
            this.triggerEvent("itemChange",{index})
            // console.log(index)
            // let {tabs} = this.data
            // tabs.forEach((v,i)=>{
            //     i===index?v.isActive=true:v.isActive=false
            // })
            // this.setData({
            //     tabs
            // })
        },
    }
})
