import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon:'material-symbols:home-rounded'},

  { text: '知识库', link: '/about/README.md', icon:'ic:outline-note-alt', activeMatch: '^/about/',},
  {
    text: '高屋建瓴', link: '/1.gao-wu-jian-ling/README.md', icon: 'simple-icons:instructure', activeMatch: '^/1.gao-wu-jian-ling/'
  },
  {
    text: '博客', link: '/blog/', icon:'material-symbols:article-outline', activeMatch: '^(/blog/|/article/)'
  },
  {
    text: '更多',
    activeMatch: '^/more/',
    icon:'mingcute:more-3-fill',
    items: [
      // {
      //   text: '我和小媛',
      //   link: '/xiao-yuan-and-xiao-jie/',
      //   icon: 'material-symbols-light:ecg-heart'
      // },
      {
        text: '关于作者',
        icon: 'akar-icons:person',
        link: '/about-author/'
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
