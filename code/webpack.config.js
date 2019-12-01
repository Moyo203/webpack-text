const path = require('path')
module.exports = {
    entry: './src/index.js',   //webpack入口
    output: {                  //webpack出口
        path: path.resolve('dist'),  //这里要绝对路径
        filename: 'bundle.js'       //这里是新建出来的文件
    },
    module:{
        rules:[
            {
                test:/\.css$/,  //正则表达式
                use:[
                    //这里是css的相关依赖包
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.less$/,		// 匹配less扩展名文件
                use:[				
                    'style-loader',		// 把less代码写入到网页中
                    'css-loader',		// 读取less的代码
                    'less-loader'		// 解释编译less代码
                ]	
            },{
                test: /\.(png|svg|jpg|gif)$/,	// 匹配图片文件
                use: [
                    {
                        loader: "file-loader",              // 处理图片文件返回链接
                        options: {
                            publicPath: "./images/",   		//  引入图片时会在路径前面加上该选项
                            outputPath: "images"            //  输出到dist下的images目录
                        }
                    } 
                ]
            }
        ]
    }
}