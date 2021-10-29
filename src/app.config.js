export default {
  pages: [
    'pages/index/index',
    'pages/homepage/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
      },
      {
        "pagePath": "pages/homepage/index",
        "text": "个人主页"
      }
    ]
  },
  "subpackages": [
    {
      "root": "details",
      "pages": [
        "detail"
      ]
    }
  ]
}
