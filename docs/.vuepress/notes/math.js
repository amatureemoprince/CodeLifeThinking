import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: 'math',
    link: '/math/',
    sidebar: [
        {
            collapsed: false,
            prefix: '/math/higher-mathematics',
            text: '高数',
            icon: 'arcticons:speed-math',
            items: [
                {
                    text: '函数、极限、连续',
                    link: 'function-limit-continuation/',
                    icon: 'gravity-ui:function'
                },
                {

                },
                {

                },
                {

                }
            ]
        }
    ]
})