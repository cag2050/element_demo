require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var fs = require('fs')

var spinner = ora('building for production...')
spinner.start()

// 将当前时间戳写入json文件
let json_obj = {"build_str": new Date().getTime().toString()}
fs.writeFile(path.resolve(__dirname, '../src/build_str.json'), JSON.stringify(json_obj), function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("打包字符串写入文件：src/build_str.json，成功！");
    realBuild()
})

function copyFile(src, dist)
{
    fs.writeFileSync(dist, fs.readFileSync(src));
}

function realBuild () {
    rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
        if (err) throw err
        webpack(webpackConfig, function (err, stats) {
            spinner.stop()
            if (err) throw err
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')
            console.log(chalk.cyan('  Build complete.\n'))
            console.log(chalk.yellow(
                '  Tip: built files are meant to be served over an HTTP server.\n' +
                '  Opening index.html over file:// won\'t work.\n'
            ))
            // 复制json到dist相应目录下
            copyFile(path.resolve(__dirname, '../src/build_str.json'), path.resolve(__dirname, '../dist/static/js/build_str.json'))
            console.log('复制 src/build_str.json 到 dist/static/js/build_str.json：成功')
        })
    })
}



