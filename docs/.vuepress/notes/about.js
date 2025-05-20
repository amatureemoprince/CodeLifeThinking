import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'about',
  link: '/about/',
  sidebar: [
    {
      text: '读者必看内容', link: '/about/', icon: 'fluent:important-12-regular',
    },
    {
      text: 'Java笔记', link: '/java/', icon: 'logos:java',
    },
    {
      text: 'JavaScript笔记', link: '/javascript/', icon: 'vscode-icons:file-type-light-js',
    },
    {
      text: '计算机基础', link: '/cs-basic/', icon: 'icon-park:laptop-computer',
    },
    {
      text: '数学', link: '/math/', icon: 'simple-icons:sagemath',
    },
    {
      text: '生产力提升工具', link: '/productivity-enhancement-tools/', icon: 'material-icon-theme:folder-tools-open',
    },
    {
      text: '人工智能', link: '/artificial-intelligence/', icon: 'catppuccin:adobe-ai',
    },
    {
      text: '英语', link: '/english/', icon: 'icon-park:english',
    }
  ]
})