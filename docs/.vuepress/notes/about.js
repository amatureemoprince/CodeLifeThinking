import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'about',
  link: '/about/',
  sidebar: [
    {
      text: 'Java教程', link: '/java/'
    },
    {
      text: 'JavaScript教程', link: '/javascript/'
    },
    {
      text: '计算机基础', link: '/cs-basic/'
    },
    {
      text: '数学', link: '/math/'
    },
    {
      text: '生产力提升工具', link: '/productivity-enhancement-tools/'
    },
    {
      text: '人工智能', link: '/artificial-intelligence/'
    }
  ]
})