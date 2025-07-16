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
                            icon: 'game-icons:swords-emblem',
                            link: 'simple/'
                        },
                        {
                            text: '难词',
                            icon: 'game-icons:swords-emblem',
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
                            icon: 'game-icons:swords-emblem',
                            link: 'zero-hard/'
                        },
                        {
                            text: "不规则词",
                            icon: 'game-icons:swords-emblem',
                            link: 'irregular-words/'
                        },
                        {
                            text: '熟词偏义——简单词',
                            icon: 'game-icons:swords-emblem',
                            link: 'partial-meaning-of-familiar-words/'
                        },
                        {
                            text: '熟词偏义——难词',
                            icon: 'game-icons:swords-emblem',
                            link: 'partial-meaning-of-hard-words/'
                        },
                        {
                            text: '熟词生义——核心词',
                            icon: 'game-icons:swords-emblem',
                            link: 'partial-meaning-of-important-words/'
                        },
                        {
                            text: '超纲词——简单词',
                            icon: 'game-icons:swords-emblem',
                            link: 'simple-words-beyond-the-syllabus/'
                        },
                        {
                            text: '超纲词——难词',
                            icon: 'game-icons:swords-emblem',
                            link: 'hard-words-beyond-the-syllabus/'
                        },
                        {
                            text: '超纲词——长难词',
                            icon: 'game-icons:swords-emblem',
                            link: 'long_hard-words-beyond-the-syllabus/'
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
                        },
                        {
                            text: '考研阅读',
                            icon: 'icon-park:english-mustache',
                            link: 'postgraduate-reading/'
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
                        },
                        {
                            text: '考研作文积累',
                            link: 'postgraduate/'
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
                        },
                        {
                            text: '一元微分学',
                            link: 'univariate-differential-calculus/',
                        },
                        {
                            text: '一元积分学',
                            link: 'univariate-integral-calculus/',
                        },
                        {
                            text: '多元微分学',
                            link: 'multivariate-differential-calculus/',
                        },
                        {
                            text: '常微分方程',
                            link: 'ordinary-differential-equation/',
                        },
                        {
                            text: '二重积分',
                            link: 'double-integral/',
                        },
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
                        },
                        {
                            text: '矩阵',
                            link: 'matrix/',
                        },
                        {
                            text: '线性方程组',
                            link: 'system-of-linear-equations/',
                        }
                    ]
                }
            ]
        },

    ],
})