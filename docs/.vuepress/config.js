import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/CodeLifeThinking/',
  lang: 'zh-CN',
  title: '代码・生 活・THINKING',
  description: '热爱生活和分享技术、设计技巧并立志成为一位优秀的软件工程师！',
  head: [
    ['link', { rel: 'icon', href: '/CodeLifeThinking/favicon.ico' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['meta', {
      name: 'description',
      content: '热爱生活和分享技术、设计技巧并立志成为一位优秀的软件开发者！'
    }],
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'keywords', content: '代码, 生活, THINKING, 技术, 编程, 设计, 软件工程师, 知识库, 个人开发, 前端, 后端, 架构, 经验分享, 博客, 教程' }],
    ['meta', { name: 'author', content: '阿杰' }],
    ['meta', { 'http-equiv': 'Content-Language', content: 'zh-CN' }],
    ['meta', { property: 'og:title', content: '代码・生 活・THINKING' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['script', { type: 'text/javascript' }, `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "qnwy9r0rp7");
      `]
  ],
  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: 'https://codelifethinking.com/',
    /* 文档仓库配置，用于 editLink */
    docsRepo: 'https://github.com/amatureemoprince/CodeLifeThinking/',
    docsDir: 'docs',
    docsBranch: 'main',
    /* 页内信息 */
    editLink: true,
    lastUpdated: true,
    contributors: true,
    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    blog: {
      postList: true, // 是否启用文章列表页
      tags: true, // 是否启用标签页
      archives: true, // 是否启用归档页
      categories: true, // 是否启用分类页
      postCover: 'right', // 文章封面位置
      pagination: 15, // 每页显示文章数量
    },
    git: true,

    changelog: {
      maxCount: 6,
      repoUrl: 'https://github.com/amatureemoprince/CodeLifeThinking',
      commitUrlPattern: ':repo/commit/:hash',
      issueUrlPattern: ':repo/issues/:issue',
      tagUrlPattern: ':repo/releases/tag/:tag'
    },

    /* 博客文章页面链接前缀 */
    article: '/article/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    // codeHighlighter: {
    //   twoslash: true, // 启用 twoslash
    //   whitespace: true, // 启用 空格/Tab 高亮
    //   lineNumbers: true, // 启用行号
    // },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    readingTime: true,

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    markdown: {
      timeline: true,
      abbr: true,         // 启用 abbr 语法  *[label]: content
      annotation: true,   // 启用 annotation 语法  [+label]: content
      pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      plot: true,         // 启用隐秘文本语法 !!xxxx!!
      bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      icons: true,        // 启用内置图标语法  ::icon-name::
      codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      demo: true,         // 启用 demo 容器  ::: demo
      repl: {             // 启用 代码演示容器
        c: true,
        go: true,         // ::: go-repl
        rust: true,       // ::: rust-repl
        kotlin: true,     // ::: kotlin-repl
      },
      math: {             // 启用数学公式
        type: 'katex',
      },
      chartjs: true,      // 启用 chart.js
      echarts: true,      // 启用 ECharts
      mermaid: true,      // 启用 mermaid
      flowchart: true,    // 启用 flowchart
      image: {
        figure: true,     // 启用 figure
        lazyload: true,   // 启用图片懒加载
        mark: true,       // 启用图片标记
        size: true,       // 启用图片大小
      },
      include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
      imageSize: 'all', // 启用 自动填充 图片宽高属性，避免页面抖动
    },
  }),
})
