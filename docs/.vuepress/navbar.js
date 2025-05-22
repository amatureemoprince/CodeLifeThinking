import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '关于作者', link: '/', icon:'cib:about-me'},

  { text: '笔记', link: '/about/README.md', icon:'ic:outline-note-alt', activeMatch: '^/about/',},

  {text: '博客', link: '/blog/', icon:'material-symbols:article-outline', activeMatch: '^(/blog/|/article/)'},

  { text: '项目', link: '/projects/', icon:'codicon:github-project', activeMatch: '^/products/'},

  {
    text: '更多',
    activeMatch: '^/more/',
    icon:'mingcute:more-3-fill',
    items: [
      {
        text: '我和小媛',
        link: '/xiao-yuan/',
        icon: 'material-symbols-light:ecg-heart'
      },
      {
        text: '考研历程',
        icon: 'game-icons:graduate-cap',
        link: '/more/postgraduate-process/README.md',
      },
      {
        text: '网站导航',
        link: '/more/website-nav/',
        icon: 'icon-park:add-web'
      },
    ]
    },

])
