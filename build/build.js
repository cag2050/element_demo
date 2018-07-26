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

let newBuildHashStr = ''

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        newBuildHashStr = stats.hash
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
        //
        let json_obj = {"build_hash": newBuildHashStr}
        fs.writeFile(path.resolve(__dirname, '../dist/static/js/build_hash.json'), JSON.stringify(json_obj), function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("打包hash写入文件：dist/static/js/build_hash.json，成功！");
        })
        fs.writeFile(path.resolve(__dirname, '../static/js/build_hash.json'), JSON.stringify(json_obj), function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("打包hash写入文件：dist/static/js/build_hash.json，成功！");
        })
    })
})


