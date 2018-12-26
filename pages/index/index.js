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
    var index = ev.target.dataset.index;
    console.log(index);
    wx.navigateTo({
      url: '../detail/detail?prjIndex=' + index,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getGlo(){
    console.log(app.globalData.info);
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