const delay = require('mocker-api/utils/delay');

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

console.log(noProxy)

const proxy = {
    'GET /cag2050/element_demo/file-list/master': (req, res) => {
        return res.json({
            text: 'this is from mock server'
        })
    }
}

module.exports = (noProxy ? {} : delay(proxy, 1000));
