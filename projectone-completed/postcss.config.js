module.exports = {
    plugins: [
        require("postcss-import"),
        require('postcss-partial-import')({
            prefix: '_'
        }),
        require('postcss-nested'), 
        require('postcss-custom-media'),
        require('postcss-at-rules-variables'),
        require('postcss-for'),
        require('postcss-each-variables'),
        require('postcss-each'),
    ],
}