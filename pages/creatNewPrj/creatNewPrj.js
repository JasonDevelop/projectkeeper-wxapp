// pages/creatNewPrj/creatNewPrj.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    inputList : [],
    pname:'',
    pstart:'',
    pend:'',
    tname:'',
    tweight:'',
    globalList:[],
    t2Display:'none',
    array: ['1', '2', '3', '4'],
    objectArray: [
      {
        id: 0,
        name: '1'
      },
      {
        id: 1,
        name: '2'
      },
      {
        id: 2,
        name: '3'
      },
      {
        id: 3,
        name: '4'
      }
    ],
    index: 0,
  },
  savaPrj(){
    //
    var list = [];
    list.push({
      pname: this.data.pname,
      pstart: this.data.pstart,
      pend: this.data.pend,
      tname: this.data.tname,
      tweight: this.data.tweight
    });
    wx.setStorage({
      key: 'msgStore', // 存入list的id？
      data: list
    })

    // var that = this;
    // var globalList = app.globalData.projectList;
    var globalList = this.data.globalList;
    globalList.push({
      val: list
    });
    wx.setStorage({
      key: 'globalList', // 存入list的id？
      data: globalList
    })
    // 点保存后跳转到主页面
    wx.navigateTo({
      url: '../index/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  handleCancelTap(){ // 点击取消返回到主页面
    wx.navigateTo({
      url: '../index/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  InputValPname(ev){
    console.log(ev);
    this.setData({
      pname:ev.detail.value
    });
  },
  InputValPstart(ev) {
    console.log(ev);
    this.setData({
      pstart: ev.detail.value
    });
  },
  InputValPend(ev) {
    console.log(ev);
    this.setData({
      pend: ev.detail.value
    });
  },
  InputValTname(ev) {
    console.log(ev);
    this.setData({
      tname: ev.detail.value
    });
  },
  InputValTweight(ev) {
    console.log(ev);
    this.setData({
      tweight: ev.detail.value
    });
  },
  addTaskEdit(){
    this.setData({
      t2Display:"bolck"
    })
  },
  //  点击权重组件确定事件  
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      tweight: e.detail.value
    })
  },
  bindPStartDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datePStart: e.detail.value,
      pstart: e.detail.value
    })
  },
  bindPEndDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datePEnd: e.detail.value,
      pend: e.detail.value
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'globalList',
      success: function (res) {
        console.log("res", res.data)
        that.setData({
          globalList: res.data
        });
      },
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})