// pages/index/index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */

  /**
   * 每个Item的属性
   * 计划名称 prjName
   * 计划开始 prjStartTime，截止时间 prjEndTime
   * 计划完成标志 prjIsFinished
   * 子任务 {名称 taskName，权重 taskWeight，完成标志 taskIsFinished}
   */
  data: {
    projectList:[]
  },
  toCreatNewPrjPage() {
    wx.navigateTo({
      url: '../creatNewPrj/creatNewPrj',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toDetailPage(ev) {
    //传出Prj的index
    var index = ev.currentTarget.dataset['index'];
    console.log(index);
    wx.navigateTo({
      url: '../detail/detail?prjIndex=' + index,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  longTap: function (ev) {
    var that = this;
    console.log(ev);
    var index = ev.currentTarget.dataset['index'];
    console.log("long tap")
    wx.showModal({
      title: '提示',
      content: '确认删除吗?',
      showCancel: true,
      cancelText: "否",
      confirmText: "是",
      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {
          //点击确定
          
          console.log(index);
          
          wx.getStorage({
            key: 'globalList',
            success: function(res) {
              wx.setData({
                projectList:res.data
              })
            },
          });
          var projectList = wx.data.projectList;
          console.log(projectList);
          that.projectList = that.projectList.splice(index,1);

          wx.setStorage({
            key: 'globalList',
            data: this.projectList,
          })
        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })
  },
  getGlo(){
    console.log(app.globalData.info);
  },
  deleteProject(ev) {
    // console.log(ev.target.dataset.index);
    var n = ev.target.dataset.index;
    var list = this.data.projectList;
    list.splice(n, 1);

    this.setData({
      projectList: list
    })
    wx.setStorage({
      key: 'globalList',
      data: list
    })

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    var that  = this;
    // that.setData({
    //    projectList:app.globalData.projectList
    // })
    wx.getStorage({
      key: 'globalList',
      success: function(res) {
        that.setData({
          projectList:res.data
        })
      },
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {
    
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {
    this.onLoad();   // 从上一页面返回后刷新
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})