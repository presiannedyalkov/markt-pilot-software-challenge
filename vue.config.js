const path = require('path');

module.exports = {
    publicPath: "/markt-pilot-software-challenge/",
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_API_CLIENT === 'server') {
            config
                .plugin('copy')
                .tap(args => {
                    args[0].push({
                        from: path.resolve(__dirname + "/src/api/mock/data/chocolate-data.json"),
                        to: path.resolve(__dirname, "dist"),
                        toType: 'dir',
                    });
                    return args;
                })
        }
    }
}