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
        }
    ],
})