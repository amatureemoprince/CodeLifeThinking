import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: 'about',
  link: '/about/',
  sidebar: [
    {
      text: '读者必看内容', link: '/about/', icon: 'fluent:important-12-regular',
    },
    {
      text: 'IT学习', link: '/it-learn/', icon: 'streamline-flex:deepfake-technology-1',
    },
    {
      text: '计算机基础', link: '/cs-basic/', icon: 'icon-park:laptop-computer',
    },
    {
      text: '考研公共科目', link: '/postgraduate/', icon: 'game-icons:graduate-cap',
    },
    {
      text: '生产力提升工具', link: '/productivity-enhancement-tools/', icon: 'material-icon-theme:folder-tools-open',
    },
    {
      text: '人工智能', link: '/artificial-intelligence/', icon: 'catppuccin:adobe-ai',
    },
  ]
})