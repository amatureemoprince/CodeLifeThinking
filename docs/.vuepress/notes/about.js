import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: '0.about',
  link: '/about/',
  sidebar: [
    {
      text: '读者必看内容', link: '/about/', icon: 'fluent:important-12-regular',
    },
    {
      text: '计算机基础知识', link: '/cs-basic/', icon: 'icon-park:laptop-computer',
    },
    {
      text: '考研公共科目', link: '/postgraduate/', icon: 'streamline-sharp-color:global-learning-flat',
    },
    {
      text: 'Java技术及相关生态', link: '/java/', icon: 'skill-icons:java-dark',
    },
    {
      text: '必备生产工具', link: '/productivity-enhancement-tools/', icon: 'material-icon-theme:folder-tools-open',
    },
    {
      text: '人工智能', link: '/ai/', icon: 'catppuccin:adobe-ai',
    },
    {
      text: '考研真题总结', link: '/real-questions/', icon: 'marketeq:question',
    }
  ]
})