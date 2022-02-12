const path = require('path');

let mode = '';

if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_API_CLIENT === 'server') {
    mode = 'productionMock'
}
const isProductionMock = mode === 'productionMock';

module.exports = {
    publicPath: isProductionMock ? "/markt-pilot-software-challenge/" : "",
    chainWebpack: config => {
        if (isProductionMock) {
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