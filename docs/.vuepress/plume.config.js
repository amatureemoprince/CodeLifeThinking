import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import notes from "./notes/index.js";
export default defineThemeConfig({
  logo: '/avatar.jpg',
  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/amatureemoprince' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/452646865?spm_id_from=333.788.0.0'},
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: true,
  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间
  docsDir: 'docs',
  /* 站点页脚 */
  footer: {
    message: '代码・生 活・THINKING | Copyright © 2023.5.20-至今 阿杰，All rights reserved',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: '/avatar.jpg',
    name: '代码・生 活・THINKING',
    description: '热爱生活和分享技术、设计技巧并立志成为一位优秀的个人开发者！',
    circle: true,
    location: '四川省资阳市雁江区',
    organization: 'hebei normal university'
  },
  navbar,
  notes,
  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'circle-clip',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
