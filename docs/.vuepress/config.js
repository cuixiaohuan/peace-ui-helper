const process = require('process');
module.exports = {
    title: "peace-ui",
    base: "/peace-ui-helper/",
    description: "基于vue开发的UI组件库",
    head: [
      ['link', { rel: 'icon', href: './logo.png' }]
    ],
    themeConfig: {
      nav: [
        { text: '指南', link: '/guide.html' },
        { text: '文档', link: '/doc.html' },
      ]
    },
    plugins: [
    ],
    dest:  process.cwd()+"/dist"
  }