(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{316:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("本文简述了"),a("code",[s._v("webpack3")]),s._v(" 和 "),a("code",[s._v("webpack4")]),s._v("在 JS Tree Shaking 上的区别，并详细介绍了在 "),a("code",[s._v("webpack4")]),s._v(" 环境下如何对 JS 代码 和 第三方库 进行 Tree Shaking。")])]),s._v(" "),a("p",[s._v("Now, 一起来踩坑吧 ♪(^∇^*)")]),s._v(" "),a("h3",{attrs:{id:"_0-课程介绍和资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-课程介绍和资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 0. 课程介绍和资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dongyuanxin/webpack-demos/tree/master/demo08",target:"_blank",rel:"noopener noreferrer"}},[s._v(">>> 本节课源码"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dongyuanxin/webpack-demos",target:"_blank",rel:"noopener noreferrer"}},[s._v(">>> 所有课程源码"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("本次课程的代码目录(如下图所示)：\n"),a("img",{attrs:{src:"https://static.godbmw.com/images/webpack/webpack4%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B/13.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_1-什么是tree-shaking？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是tree-shaking？","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 什么是"),a("code",[s._v("Tree Shaking")]),s._v("？")]),s._v(" "),a("blockquote",[a("p",[s._v("字面意思是摇树，一句话："),a("strong",[s._v("项目中没有使用的代码会在打包时候丢掉")]),s._v("。JS 的 Tree Shaking 依赖的是 ES2015 的模块系统（比如："),a("code",[s._v("import")]),s._v("和"),a("code",[s._v("export")]),s._v("）")])]),s._v(" "),a("p",[s._v("本文介绍"),a("code",[s._v("Js Tree Shaking")]),s._v("在"),a("code",[s._v("webpack v4")]),s._v("中的激活方法。")]),s._v(" "),a("h3",{attrs:{id:"_2-不再需要uglifyjswebpackplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-不再需要uglifyjswebpackplugin","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 不再需要"),a("code",[s._v("UglifyjsWebpackPlugin")])]),s._v(" "),a("p",[s._v("是的，在"),a("code",[s._v("webpack v4")]),s._v("中，不再需要配置"),a("code",[s._v("UglifyjsWebpackPlugin")]),s._v("。（详情请见："),a("a",{attrs:{href:"https://www.webpackjs.com/plugins/uglifyjs-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1),s._v("） 取而代之的是，更加方便的配置方法。")]),s._v(" "),a("p",[s._v("只需要配置"),a("code",[s._v("mode")]),s._v("为"),a("code",[s._v('"production"')]),s._v("，即可显式激活 "),a("code",[s._v("UglifyjsWebpackPlugin")]),s._v(" 插件。")]),s._v(" "),a("p",[a("em",[s._v("注意：根据版本不同，更新的"),a("code",[s._v("webpack v4.x")]),s._v("不配置"),a("code",[s._v("mode")]),s._v("也会自动激活插件")])]),s._v(" "),a("p",[s._v("我们的"),a("code",[s._v("webpack.config.js")]),s._v("配置如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/app.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    publicPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" __dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/dist/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[name].bundle.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("我们在"),a("code",[s._v("util.js")]),s._v("文件中输入以下内容：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// util.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is function \"a\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is function \"b\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'this is function \"c\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("然后在"),a("code",[s._v("app.js")]),s._v("中引用"),a("code",[s._v("util.js")]),s._v("的"),a("code",[s._v("function a()")]),s._v("函数：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./vendor/util"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("命令行运行"),a("code",[s._v("webpack")]),s._v("打包后，打开打包后生成的"),a("code",[s._v("/dist/app.bundle.js")]),s._v("文件。然后，查找我们"),a("code",[s._v("a()")]),s._v("函数输出的字符串，如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.godbmw.com/images/webpack/webpack4%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B/14.png",alt:""}})]),s._v(" "),a("p",[s._v("如果将查找内容换成 "),a("code",[s._v('this is function "c"')]),s._v(" 或者 "),a("code",[s._v('this is function "b"')]),s._v(", 并没有相关查找结果。"),a("strong",[s._v("说明"),a("code",[s._v("Js Tree Shaking")]),s._v("成功")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_3-如何处理第三方js库？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何处理第三方js库？","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. 如何处理第三方"),a("code",[s._v("JS")]),s._v("库？")]),s._v(" "),a("blockquote",[a("p",[s._v("对于经常使用的第三方库（例如 jQuery、lodash 等等），如何实现"),a("code",[s._v("Tree Shaking")]),s._v("？下面以 lodash.js 为例，进行介绍。")])]),s._v(" "),a("h4",{attrs:{id:"_3-1-尝试-tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-尝试-tree-shaking","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 尝试 "),a("code",[s._v("Tree Shaking")])]),s._v(" "),a("p",[s._v("安装 lodash.js : "),a("code",[s._v("npm install lodash --save")])]),s._v(" "),a("p",[s._v("在 app.js 中引用 lodash.js 的一个函数：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" chunk "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chunk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("命令行打包。如下图所示，打包后大小是 70kb。显然，只引用了一个函数，不应该这么大。并没有进行"),a("code",[s._v("Tree Shaking")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.godbmw.com/images/webpack/webpack4%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B/15.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"_3-2-第三方库的模块系统-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-第三方库的模块系统-版本","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 第三方库的模块系统 版本")]),s._v(" "),a("p",[s._v("本文开头讲过，"),a("code",[s._v("js tree shaking")]),s._v(" 利用的是 es 的模块系统。而 lodash.js 没有使用 CommonJS 或者 ES6 的写法。所以，"),a("strong",[s._v("安装库对应的模块系统即可")]),s._v("。")]),s._v(" "),a("p",[s._v("安装 lodash.js 的 es 写法的版本："),a("code",[s._v("npm install lodash-es --save")])]),s._v(" "),a("p",[s._v("小小修改一下"),a("code",[s._v("app.js")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" chunk "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash-es"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chunk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("再次打包，打包结果只有 3.5KB（如下图所示）。显然，"),a("code",[s._v("tree shaking")]),s._v("成功。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.godbmw.com/images/webpack/webpack4%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B/16.png",alt:""}})]),s._v(" "),a("p",[a("em",[s._v("友情提示：在一些对加载速度敏感的项目中使用第三方库，请注意库的写法是否符合 es 模板系统规范，以方便"),a("code",[s._v("webpack")]),s._v("进行"),a("code",[s._v("tree shaking")]),s._v("。")])]),s._v(" "),a("p",[a("em",[s._v("终")])])])},[],!1,null,null,null);t.default=e.exports}}]);