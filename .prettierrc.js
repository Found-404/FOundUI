module.exports = {
    pluginSearchDirs: false,
    plugins: [
        require.resolve('prettier-plugin-organize-imports'),
        require.resolve('prettier-plugin-packagejson')
    ],
    printWidth: 80,
    proseWrap: 'never',
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
        {
            files: '*.md',
            options: {
                proseWrap: 'preserve'
            }
        }
    ],
    // 一行最多 100 字符
    printWidth: 100,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾分号
    semi: false,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾不需要逗号
    trailingComma: 'none',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    overrides: [
        {
            files: '*.md',
            options: {
                proseWrap: 'preserve'
            }
        }
    ]
}
