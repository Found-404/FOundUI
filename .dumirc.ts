import { defineConfig } from 'dumi'

export default defineConfig({
    outputPath: 'docs-dist',
    themeConfig: {
        name: 'FOundUI',
        nav: {
            'zh-CN': [
                {
                    title: '设计',
                    link: '/guide/origin'
                },
                {
                    title: '组件',
                    link: '/components/button'
                },
                {
                    title: 'Github',
                    link: 'https://github.com/Found-404'
                }
            ],
            'en-US': [
                {
                    title: 'Design',
                    link: '/en-US/guide/origin'
                },
                {
                    title: 'Components',
                    link: '/en-US/components/button'
                },
                {
                    title: 'Github',
                    link: 'https://github.com/Found-404'
                }
            ]
        }
    },
    locales: [
        {
            id: 'zh-CN',
            name: '中文'
        },
        {
            id: 'en-US',
            name: 'English'
        }
    ]
})
