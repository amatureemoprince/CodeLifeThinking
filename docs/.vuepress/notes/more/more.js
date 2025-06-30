import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: 'more',
    link: '/more/',
    sidebar: [
        {
            text: '考研历程',
            prefix: '/more/postgraduate-process',
            collapsed: true,
            icon: 'game-icons:graduate-cap',
            items: [
                {
                    text: '关于考研',
                    icon: 'iconoir:learning',
                    link: '/more/postgraduate-process/',
                },
                {
                    text: '2025年2月',
                    icon: 'stash:data-date',
                    link: '25-2/'
                },
                {
                    text: '2025年3月',
                    icon: 'stash:data-date',
                    link: '25-3/'
                },
                {
                    text: '2025年4月',
                    icon: 'stash:data-date',
                    link: '25-4/'
                },
                {
                    text: '2025年5月',
                    icon: 'stash:data-date',
                    link: '25-5/'
                },
                {
                    text: '2025年6月',
                    icon: 'stash:data-date',
                    link: '25-6/'
                },
                {
                    text: '2025年7月',
                    icon: 'stash:data-date',
                    link: '25-7/'
                }
            ],
        },
        {
            text: '优质网站',
            icon: 'arcticons:websitemonitor',
            link: '/more/website-nav/'
        }
    ],
})