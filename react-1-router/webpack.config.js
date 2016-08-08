'use strict'
var assetsViews = require('./assets-views');
var path = require('path');

/*var fs = require('fs');
var xmlDoc = require('xmldoc');

// 解决webpack打包, idea不能实时同步
var projectRoot = path.join(__dirname, '../../../../../');
var pomPath = path.join(projectRoot, 'pom.xml');
console.log('开始扫描==>' + pomPath);
var projectName = '';

try {
  // 获取web下面的pom文件中的version和artifactId
  var pomXml = fs.readFileSync(pomPath);

  var document = new xmlDoc.XmlDocument(pomXml);
  var artifactId = document.valueWithPath('artifactId');
  var version = document.valueWithPath('parent.version');
  //projectName = artifactId + '-' + version;
  projectName = artifactId;
  console.log('扫描完毕==>artifactId=%s, version=%s', artifactId, version);
} catch (err) {
  console.log('没有发现maven项目的pom文件.');
  throw err;
}

// 打包的js存放路径，如果maven在target目录里生成了bossweb，则直接生成到target中，否则，生成到项目的/js/build/
var targetPath = fs.existsSync(path.join(projectRoot, 'target', projectName))
  ? path.join(projectRoot, 'target', projectName, 'static-pc/js/build')
  : '../../static-pc/js/build';*/

module.exports = {
  //需要打包的js;
  entry: {
    'app': 'app.js'
  },

  resolve: {
    modulesDirectories: ['', 'common', 'node_modules']
  },

  //输出打包信息:path 为 针对webpack打包后 输出js的路径; publicPath 为 针对jsp页面获取打包后js 的路径(可以是相对也可以是绝对路径);
  output: {
    //path: targetPath, //线上路径 './build/'
    path: './build/', //线上路径 './build/'
    filename: 'xy-[name]-[chunkhash].js',
    publicPath: '../build/'
  },

  //处理jsx的编译;
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },

  plugins: [
    assetsViews({
      from: './views/',
      to: './jsp/'
    })
  ]
};