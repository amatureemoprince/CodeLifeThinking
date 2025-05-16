import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '关于', link: '/', icon:'cib:about-me'},

  { text: '教程', link: '/about/README.md', icon:'ic:outline-note-alt', activeMatch: '^/about/',},

  {text: '博客', link: '/blog/', icon:'material-symbols:article-outline', activeMatch: '^(/blog/|/article/)'},

  { text: '项目', link: '/projects/', icon:'codicon:github-project', activeMatch: '^/products/'},

  { text: '更多', link: '/more/', icon:'mingcute:more-3-fill', activeMatch: '^/more/',},

])
