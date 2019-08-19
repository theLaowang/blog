(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{274:function(v,r,e){"use strict";e.r(r);var _=e(2),s=Object(_.a)({},function(){var v=this,r=v.$createElement,e=v._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("主要分析下 src 文件夹下的代码。从简单到难吧：")]),v._v(" "),e("h2",{attrs:{id:"utils-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#utils-js","aria-hidden":"true"}},[v._v("#")]),v._v(" utils.js")]),v._v(" "),e("p",[v._v("按照命名，肯定是封装一些常用的方法。这里只提供了一个 cpuNum 的 getter 接口。")]),v._v(" "),e("p",[v._v("这个是计算当前计算机的 cpu 核心数目，用于决定开启多大的集群进程。为了保证效率，最小的返回值是 4。")]),v._v(" "),e("h2",{attrs:{id:"error-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-js","aria-hidden":"true"}},[v._v("#")]),v._v(" error.js")]),v._v(" "),e("p",[v._v("主要从 "),e("code",[v._v("Error")]),v._v("  对象上继承并且创建了新对象： "),e("code",[v._v("VemoError")]),v._v(" 。对象构造函数上， "),e("strong",[v._v("设计了一个有关此框架的错误状态码的信息")]),v._v(" 。")]),v._v(" "),e("p",[v._v("除了 "),e("code",[v._v("VemoError")]),v._v(" ，还暴露了一些错误的代号定义。")]),v._v(" "),e("h2",{attrs:{id:"cluster-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-js","aria-hidden":"true"}},[v._v("#")]),v._v(" cluster.js")]),v._v(" "),e("p",[v._v("对外暴露了自定义的高并发集群代码，它引用了同级的 "),e("code",[v._v("./process.js")]),v._v('  封装的管理类，并且初始化了它。它的具体含义请见"process.js"中的讲解。')]),v._v(" "),e("h2",{attrs:{id:"cloudbase-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cloudbase-js","aria-hidden":"true"}},[v._v("#")]),v._v(" cloudbase.js")]),v._v(" "),e("p",[e("code",[v._v("getLocalSecret")]),v._v("  方法是读取本地用户的根目录中的 "),e("code",[v._v(".tcbrc.json")]),v._v("  配置文件，并且将 Id 和 Key 放入 "),e("code",[v._v("process.env")]),v._v("  变量中。")]),v._v(" "),e("p",[e("code",[v._v("getTempSecret")]),v._v("  方法是获取云主机的临时密钥：")]),v._v(" "),e("ol",[e("li",[v._v("正常情况下，访问远程地址，获取 id、key、token 和过期时间，并且放入 "),e("code",[v._v("process.env")]),v._v("  变量中。 "),e("strong",[v._v("有个不错的设计点：过期时间比远程动态减少 600s，主要是为了提前拉取")])]),v._v(" "),e("li",[v._v("异常情况下， "),e("strong",[v._v("如果没有到达最大失败次数，则在异常捕获中，调用自身，进行重试")]),v._v(" 。这里也是一个不错的设计点，包括参数的传递。（不需要用闭包）")]),v._v(" "),e("li",[e("strong",[v._v("改进意见")]),v._v(" ：")]),v._v(" "),e("li",[v._v("考虑到网络情况造成的异常情况处理，其实可以使用定时器调用。")]),v._v(" "),e("li",[v._v("检测位置可以提到函数入口，考虑参数为 (0, -1) 的情况")])]),v._v(" "),e("p",[e("br"),v._v("对外暴露："),e("br"),v._v("async 函数，就是拿到有效的临时密钥，并且挂载上下文，继续执行后面的程序（next 参数）。")]),v._v(" "),e("h2",{attrs:{id:"process-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-js","aria-hidden":"true"}},[v._v("#")]),v._v(" process.js")]),v._v(" "),e("p",[v._v("整体的设计思路是：一个主进程，多个工作进程。为了保证工作进程有效，"),e("strong",[v._v('又采用了"心跳机制" + "生命周期" + "定时检测"3 种机制')]),v._v("来保证有效以及意外情况下的重启机制。")]),v._v(" "),e("p",[v._v("除此之外，在内存不足的时候，会自动降级服务！")]),v._v(" "),e("h3",{attrs:{id:"内置方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置方法","aria-hidden":"true"}},[v._v("#")]),v._v(" 内置方法")]),v._v(" "),e("p",[e("code",[v._v("timer")]),v._v("  函数，就是一个类似 setInterval 的函数。与 setInterval 不同的地方有 2 点：")]),v._v(" "),e("ol",[e("li",[v._v("回调函数的参数：当前的时间戳")]),v._v(" "),e("li",[v._v("第一次是立即执行的")])]),v._v(" "),e("p",[e("code",[v._v("restartWorker")]),v._v("  函数，专门用来重启工作进程的函数。"),e("br"),v._v("它首先会检测距离上次批量重启的时间是否太短，太短，则跳过。 "),e("strong",[v._v("根据全局环境设置，这里的每次自动重启检测的时间是 60s。")]),v._v(" "),e("br"),v._v("否则，循环遍历所有子进程， "),e("strong",[v._v("检查当前子进程的存活时间是否超过规定（60min）")]),v._v(" ，超过，就调用 killWorker 先新建再删除。"),e("br"),v._v("这个函数的精彩之处，在于时间上的处理。一言：每分钟自动检测进程更新，每个进程都会在 1 小时后被依次自动更新。")]),v._v(" "),e("p",[e("code",[v._v("killWorker")]),v._v("  函数，先启动新进程占位，再删除原进程。")]),v._v(" "),e("ol",[e("li",[v._v("对于新建的进程：监听 killSelf 新号，重建自己；监听 hearBeat 心跳信号。")]),v._v(" "),e("li",[v._v("对于被替换的老进程：先断开连接，再 2s 后 kill 掉。（ "),e("em",[v._v("problem：为什么先断链，再关闭呢")]),v._v(" ？如果有大运算，调用 disconnect 会阻塞并不会关闭 IPC 管道。需要等待 2s 自定义缓冲时间， "),e("strong",[v._v("再强制 kill")]),v._v(" ，不再调用 disconnect，因为还会阻塞）。")])]),v._v(" "),e("h3",{attrs:{id:"对外暴露方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对外暴露方法","aria-hidden":"true"}},[v._v("#")]),v._v(" 对外暴露方法")]),v._v(" "),e("p",[e("code",[v._v("init")]),v._v("  函数，初始化进程管理器：")]),v._v(" "),e("ol",[e("li",[v._v("对于主进程")]),v._v(" "),e("li",[v._v("根据 cpu 核心创建工作进程")]),v._v(" "),e("li",[v._v("每个工作进程监听 3 种信号并且响应")]),v._v(" "),e("li",[v._v("开启 restartWorker，对于超过生命周期的进程，自动重启")]),v._v(" "),e("li",[v._v("再定义一个 timer，检测每个工作进程存活状态，以及心跳是否正常")]),v._v(" "),e("li",[v._v("对于工作进程")]),v._v(" "),e("li",[v._v("加载 index.js 中的端口逻辑，若有出错，则告知主进程，并且关闭主进程（ "),e("em",[v._v("problem：主进程会自动关闭其他工作进程吗？")]),v._v(' cluster 已经帮忙做了，linux 下通过 ps -aux | grep "..." 可以查看）')]),v._v(" "),e("li",[v._v("定义一个 timer，向主进程发送心跳包")]),v._v(" "),e("li",[v._v("定义一个 timer，检测内存占用过高，主进程关闭工作进程（ "),e("em",[v._v("problem：process.memoryUsage()是全部的吗？是当前进程的信息")]),v._v(" ）")])]),v._v(" "),e("p",[e("code",[v._v("reload")]),v._v("  函数，重启全部进程："),e("br"),v._v("这个设计的很巧妙，因为全部工作进程的创建时间都放在 "),e("code",[v._v("workerCreateTime")]),v._v("  对象中，主进程中又开启了自动重启子进程的 timer（在 120 行）。所以这里直接一个循环，将其所有属性置 0。"),e("br"),e("strong",[v._v("当然，这并不是同时重启，每个子进程的重启有个间隔，这个间隔可以改进，因为这个间隔期间就是服务器响应能力比较弱的时候")])]),v._v(" "),e("h2",{attrs:{id:"index-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index-js","aria-hidden":"true"}},[v._v("#")]),v._v(" index.js")]),v._v(" "),e("p",[v._v("在工作进程启动端口相关的服务，主要分为 3 个部分：普通 http 服务、websocket 服务以及静态服务器服务。")]),v._v(" "),e("p",[v._v("请分别调研使用它们的服务对应的库的用法。")])])},[],!1,null,null,null);r.default=s.exports}}]);