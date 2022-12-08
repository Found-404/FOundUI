import { defineConfig } from 'dumi'

export default defineConfig({
    outputPath: 'docs-dist',
    themeConfig: {
        name: 'FOundUI',
        nav: [
            {
                title: '设计',
                link: '/guide'
            },
            {
                title: '组件',
                link: '/components/button'
            },
            {
                title: 'Github',
                link: 'https://github.com/Found-404'
            }
        ]
    }
})
