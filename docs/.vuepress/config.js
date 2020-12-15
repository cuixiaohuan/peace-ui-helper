const process = require('process');
module.exports = {
    title: "peace-ui",
    base: "peace-ui-helper/",
    description: "基于vue开发的UI组件库",
    head: [
      ['link', { rel: 'icon', href: `https://bpic.588ku.com/art_water_pic/19/04/29/107899ddd29a2fe084d9ea7cc89c3ecb.jpg` }]
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