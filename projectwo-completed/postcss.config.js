module.exports = {
    plugins: [
        require('@fullhuman/postcss-purgecss')({
            content: ['./**/*.html']
        }),
        require('cssnano')
    ]
}