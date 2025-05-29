import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: 'english',
    link: '/english/',
    sidebar: [
        {
            collapsed: true,
            text: '翻译',
            prefix: '/english/translation/',
            icon: 'ant-design:translation-outlined',
            items: [
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
            prefix: '/english/words/',
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
            ]
        },
        {
            collapsed: true,
            text: '技巧',
            icon: 'hugeicons:language-skill',
            prefix: '/english/skill/',
            items: [
                {
                    text: 'CET-6',
                    icon: 'icon-park:english-mustache',
                    link: 'CET-6/'
                }
            ]
        }
    ],
})