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
                },
                {
                    text: '暑假期间任务进度表',
                    icon: 'streamline-freehand-color:design-process-drawing-board-education',
                    link: 'shu-qi-process-table/'
                }
            ],
        },
        {
            text: '真题总结',
            icon: 'streamline-freehand-color:design-process-drawing-board',
            prefix: '/more/real-questions/',
            collapsed: true,
            items: [
                {
                    text: '高数真题',
                    icon: 'clarity:process-on-vm-line',
                    prefix: 'math/',
                    collapsed: true,
                    items: [
                        {
                            text: '06年真题',
                            icon: 'devicon:processwire',
                            link: '06/'
                        },
                        {
                            text: '07年真题',
                            icon: 'devicon:processwire',
                            link: '07/'
                        },
                        {
                            text: '08年真题',
                            icon: 'devicon:processwire',
                            link: '08/'
                        },
                        {
                            text: '09年真题',
                            icon: 'devicon:processwire',
                            link: '09/'
                        },
                        {
                            text: '10年真题',
                            icon: 'devicon:processwire',
                            link: '10/'
                        },
                        {
                            text: '11年真题',
                            icon: 'devicon:processwire',
                            link: '11/'
                        },
                        {
                            text: '12年真题',
                            icon: 'devicon:processwire',
                            link: '12/'
                        },
                        {
                            text: '13年真题',
                            icon: 'devicon:processwire',
                            link: '13/'
                        },
                        {
                            text: '14年真题',
                            icon: 'devicon:processwire',
                            link: '14/'
                        },
                        {
                            text: '15年真题',
                            icon: 'devicon:processwire',
                            link: '15/'
                        },
                        {
                            text: '16年真题',
                            icon: 'devicon:processwire',
                            link: '16/'
                        }
                    ]
                },
                {
                    text: '408真题',
                    icon: 'icon-park:computer',
                    prefix: '408/',
                    collapsed: true,
                    items: [
                        {
                            text: '11年真题',
                            icon: 'devicon:processwire',
                            link: '11/'
                        }
                    ]
                }
            ]
        },
        {
            text: '优质网站',
            icon: 'arcticons:websitemonitor',
            link: '/more/website-nav/'
        }
    ],
})