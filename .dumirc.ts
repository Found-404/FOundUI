import { defineConfig } from 'dumi'

export default defineConfig({
    outputPath: 'docs-dist',
    // apiParser: {},
    // resolve: {
    //   // 配置入口文件路径，API 解析将从这里开始
    //   entryFile: './src/index.ts',
    // },
    themeConfig: {
        name: 'FOundUI',
        nav: [
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
        ]
    }
})
