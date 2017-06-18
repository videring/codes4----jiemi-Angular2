# Hello-World

Hello-world project for Angular 2 with webpack, example in this book "揭秘Angular 2".

## Usage

- Clone or fork this repository
- Make sure you have node.js(> 4.0) installed
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to <http://localhost:3000>


##如果报 Cannot resolve 'file' or 'directory' 这样的错误，请参考http://blog.csdn.net/yiifaa/article/details/53691660
##将''也配置进extensions
resolve: {
    //  第一项扩展非常重要，千万不要忽略，否则经常出现模块无法加载错误
    extensions: ['', '.js', '.es6', '.vue']
},
