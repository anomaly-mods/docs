export default [
    [
        'classic',
        ({
            docs: false,
            blog: {
                showReadingTime: true,
                editUrl: 'https://github.com/anomaly-mods/docs/tree/main/blog/',
            },
            theme: {
                customCss: require.resolve('../src/css/custom.scss'),
            },
        }),
    ],
]