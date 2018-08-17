var fs = require('fs')
var path = require('path')

function copyFile(src, dist)
{
    fs.writeFileSync(dist, fs.readFileSync(src));
}

copyFile(path.resolve(__dirname, '../src/build_str.json'), path.resolve(__dirname, '../dist/static/js/build_str.json'))
