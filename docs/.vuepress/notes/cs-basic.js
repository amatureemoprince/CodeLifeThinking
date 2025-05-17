import {defineNoteConfig} from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: 'cs-basic',
    link: '/cs-basic/',
    sidebar: [
        {
            collapsed: true,
            prefix: '/cs-basic/network',
            text: '计算机网络',
            icon: 'material-symbols:network-intel-node-rounded',
            items: [
                {
                    text: '计算机中的分层思想',
                    link: 'layer-thinking-in-network/'
                },
                {
                    text: '物理层',
                    link: 'phy-layer/',
                },
                {
                    text: '数据链路层',
                    link: 'data-link-layer/'
                },
                {
                    text: '网络层',
                    link: 'ip-layer/',
                },
                {
                    text: '传输层',
                    link: 'trans-layer/',
                },
                {
                    text: '应用层',
                    link: 'app-layer/',
                }
            ]
        },
        {
            collapsed: true,
            prefix: '/cs-basic/ds',
            text: '数据结构',
            icon: 'hugeicons:structure-05',
            items: [
                {
                    text: '什么是数据结构',
                    link: 'what-is-ds/'
                },
                {
                    text: '衡量算法的标准',
                    link: 'standard-for-measuring-algo/',
                },
                {
                    text: '线性表',
                    link: 'linear-list/',
                },
                {
                    text: '栈、队列、数组',
                    link: 'stack-queue-array/',
                },
                {
                    text: '树',
                    link: 'tree/',
                },
                {
                    text: '图',
                    link: 'graph/',
                },
                {
                    text: '查找算法',
                    link: 'search-algo/',
                },
                {
                    text: '排序算法',
                    link: 'sort-algo/',
                }
            ]
        },
        {
            text: '操作系统',
            prefix: '/cs-basic/os',
            collapsed: true,
            icon: 'iconoir:windows',
            items: [
                {
                    text: '操作系统概述',
                    link: 'os-prefer/'
                },
                {
                    text: '进程管理',
                    link: 'process-manager/'
                },
                {
                    text: '内存管理',
                    link: 'memory-manager/'
                },
                {
                    text: '文件管理',
                    link: 'file-manager/'
                },
                {
                    text: '设备管理',
                    link: 'device-manager/'
                }
            ]
        },
        {
            text: '计算机组成原理',
            collapsed: true,
            prefix: '/cs-basic/principle',
            icon: 'simple-icons:opensourcehardware',
            items: [
                {
                    text: '计算机系统概述',
                    link: 'computer-overview/'
                },
                {
                    text: '数据在计算机中的表示方式',
                    link: 'data-performance/'
                },
                {
                    text: '存储系统',
                    link: 'storage-sys/'
                },
                {
                    text: '指令系统',
                    link: 'instruction-sys/'
                },
                {
                    text: '中央处理器',
                    link: 'cpu/'
                },
                {
                    text: '总线',
                    link: 'bus/'
                },
                {
                    text: '输入/输出系统',
                    link: 'in-out-sys/'
                }
            ]
        }
    ],
})