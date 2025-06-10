import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: 'english',
    link: '/postgraduate/',
    sidebar: [
        //英语
        {
            collapsed: true,
            text: '英语',
            prefix: '/postgraduate/english/',
            icon: 'icon-park:english-mustache',
            items: [
                {
                    text: '翻译',
                    prefix: 'translation/',
                    icon: 'ant-design:translation-outlined',
                    collapsed: true,
                    items:[
                        {
                            text: 'CET-6',
                            icon: 'token:cetus',
                            link: 'CET-6/'
                        }
                    ]
                },
                {
                    collapsed: true,
                    text: "单词",
                    prefix: 'words/',
                    icon: 'icon-park:word',
                    items: [
                        {
                            text: '简单词',
                            icon: 'ph:fire-simple-bold',
                            link: 'simple/'
                        },
                        {
                            text: '难词',
                            icon: 'arcticons:hard-dance',
                            link: 'hard/'
                        },
                        {
                            text: '零频词——简单词',
                            icon: 'game-icons:swords-emblem',
                            link: 'zero-simple/'
                        }
                        ,
                        {
                            text: '零频词——难词',
                            icon: 'icon-park-twotone:english-mustache',
                            link: 'zero-hard/'
                        }
                    ]
                },
                {
                    collapsed: true,
                    text: '技巧',
                    icon: 'hugeicons:language-skill',
                    prefix: 'skill/',
                    items: [
                        {
                            text: 'CET-6',
                            icon: 'icon-park:english-mustache',
                            link: 'CET-6/'
                        }
                    ]
                },
                {
                    collapsed: true,
                    text: '作文',
                    icon: 'streamline-freehand-color:composition-paronama-horizontal',
                    prefix: 'composition/',
                    items: [
                        {
                            text: 'CET-6',
                            link: 'CET-6/'
                        }
                    ]
                }
            ]
        },
        //数学
        {
            text: '数学',
            prefix: '/postgraduate/math/',
            collapsed: true,
            icon: 'arcticons:speed-math',
            items: [
                {
                    text: '高数',
                    prefix: 'higher-mathematics/',
                    icon: 'simple-icons:sagemath',
                    items: [
                        {
                            text: '函数、极限、连续',
                            link: 'function-limit-continuation/',
                            icon: 'gravity-ui:function'
                        },
                        {
                            text: '一元积分学',
                            link: 'univariate-integral-calculus/',
                            icon: 'tabler:math-integral'
                        },
                        {
                            text: '常微分方程',
                            link: 'ordinary-differential-equation/',
                            icon: 'fluent:math-format-linear-20-filled'
                        }
                    ]
                },
                {
                    text: '线性代数',
                    prefix: 'linear-algebra/',
                    collapsed: true,
                    icon: 'tabler:matrix',
                    items: [
                        {
                            text: '行列式',
                            link: 'determinant/',
                            icon: 'healthicons:health-vulnerability-through-social-determinants-outline-24px'
                        },
                        {
                            text: '矩阵',
                            link: 'matrix/',
                            icon: 'mdi:matrix'
                        }
                    ]
                }
            ]
        },

    ],
})