module.exports = {
    extends: require.resolve('@umijs/lint/dist/config/eslint'),
    rules: {
        semi: [2, 'never'], // 不使用分号，否则报错
        quotes: [2, 'single'] // 使用单引号，否则报错
    }
}
