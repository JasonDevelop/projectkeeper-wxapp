//app.js
App({
  globalData: {
    pid:0,
    userInfo: null,
    info: "info123",
    projectList: [{
        'pname': '开发小程序',
        'pstart': 'prjStartTime',
        'pend': '12月17日',
        'pIsFinished': 'prjIsFinished',
        'taskList': [{
          'tame': 'taskName',
          'tweight': 'taskWeight',
          'taskIsFinished': 'taskIsFinished'
        }]
      },
    ]
  }
})