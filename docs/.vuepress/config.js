const process = require('process');
module.exports = {
    title: "peace-ui",
    base: "/peace-ui-helper/",
    description: "基于vue开发的UI组件库",
    head: [
      ['link', { rel: 'icon', href: './img/logo.png' }]
    ],
    themeConfig: {
      nav: [
        { text: '指南', link: '/guide' },
        { text: '文档', link: '/doc/' },
        { text: 'github', link: 'https://github.com/cuixiaohuan/peace-ui' },
      ],sidebar: {
        '/doc/': [
           '',
          '基础组件',
          '数据展示',
        ],
    },
    },
    plugins: [
    ],
    dest:  process.cwd()+"/dist"
  }