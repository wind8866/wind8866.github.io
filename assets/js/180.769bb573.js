(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{541:function(r,e,t){"use strict";t.r(e);var _=t(44),v=Object(_.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h3",{attrs:{id:"设计理念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计理念"}},[r._v("#")]),r._v(" 设计理念")]),r._v(" "),t("p",[r._v("践行快速响应的理念："),t("br"),r._v("\n60Hz，超过16.6ms会掉帧"),t("br"),r._v("\nCUP：同步、防抖、节流、异步可中断（浏览器将预留时间给react，如果计算量大，会将渲染渲染权限交给浏览器）"),t("a",{attrs:{href:"https://codesandbox.io/s/concurrent-3h48s?file=/src/index.js:2265-2277",target:"_blank",rel:"noopener noreferrer"}},[r._v("demo"),t("OutboundLink")],1),t("br"),r._v("\nIO：延迟loading")]),r._v(" "),t("ul",[t("li",[r._v("[ ] "),t("a",{attrs:{href:"https://www.zhihu.com/question/31809713",target:"_blank",rel:"noopener noreferrer"}},[r._v("尤雨溪 原生 dom 更新更快的回答"),t("OutboundLink")],1)]),r._v(" "),t("li",[r._v("[ ] 浏览器执行过程")]),r._v(" "),t("li",[r._v("[ ] 浏览器控制台分析")]),r._v(" "),t("li",[r._v("[ ] "),t("a",{attrs:{href:"https://www.bilibili.com/video/av61099876?spm_id_from=333.788.b_636f6d6d656e74.6",target:"_blank",rel:"noopener noreferrer"}},[r._v("尤雨溪演讲"),t("OutboundLink")],1)])]),r._v(" "),t("h3",{attrs:{id:"架构的演进史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构的演进史"}},[r._v("#")]),r._v(" 架构的演进史")]),r._v(" "),t("p",[r._v("react 15 架构")]),r._v(" "),t("ul",[t("li",[r._v("协调器：渲染什么组件，diff算法（比较组件，变化的组件被渲染）")]),r._v(" "),t("li",[r._v("渲染器：将组件渲染到视图中 （渲染到视图中：ReactDOM、ReactNative）")])]),r._v(" "),t("p",[r._v("事件触发 => 状态修改 =>"),t("br"),r._v("\nLoop：协调器通知渲染器 => 渲染器渲染")]),r._v(" "),t("p",[r._v("因为是依次同步执行更新，所以当同步代码走到一半时，中断发生，页面只更新部分，产生bug")]),r._v(" "),t("p",[r._v("React 16")]),r._v(" "),t("ul",[t("li",[r._v("调度器：调度更新，更高优先级的会先进入协调器，如果此时来个一个优先级更高的，会中断协调器，将更高优先级的推送到协调器")]),r._v(" "),t("li",[r._v("协调器：决定更新什么组件")]),r._v(" "),t("li",[r._v("渲染器(Renderer)：将组件更新到视图")])]),r._v(" "),t("p",[r._v("事件触发 => 状态修改 =>"),t("br"),r._v("\n查看是否有更高优先级的任务需要被调度 => (没有) => 交给协调器")]),r._v(" "),t("p",[r._v("协调器（创建虚拟DOM需要更新的打标记）） => 通知渲染器 => 渲染器渲染（拥有自主渲染的权利，而不是调用就执行）")]),r._v(" "),t("h3",{attrs:{id:"react新架构-fiber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react新架构-fiber"}},[r._v("#")]),r._v(" React新架构—Fiber")]),r._v(" "),t("p",[r._v("代数效应：将副作用从函数调用中分离【没听懂0200】【没听懂，异步可中断】"),t("br"),r._v("\n需求：更新可以被中断、更新可以拥有优先级")]),r._v(" "),t("ul",[t("li",[r._v("[ ] 纤程 Fiber")]),r._v(" "),t("li",[r._v("[ ] 进程")]),r._v(" "),t("li",[r._v("[ ] 线程")]),r._v(" "),t("li",[r._v("[ ] 协程 Generator")]),r._v(" "),t("li",[r._v("[ ] 函数式编程")])]),r._v(" "),t("h3",{attrs:{id:"fiber-架构工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fiber-架构工作原理"}},[r._v("#")]),r._v(" Fiber 架构工作原理")]),r._v(" "),t("ul",[t("li",[r._v("[ ] "),t("a",{attrs:{href:"https://github.com/acdlite/react-fiber-architecture",target:"_blank",rel:"noopener noreferrer"}},[r._v("Fiber 的官方解释"),t("OutboundLink")],1)]),r._v(" "),t("li",[r._v("[ ] "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=ZCuYPiUIONs&t=801s",target:"_blank",rel:"noopener noreferrer"}},[r._v("视频讲解"),t("OutboundLink")],1)])]),r._v(" "),t("p",[r._v("Fiber的含义")]),r._v(" "),t("ul",[t("li",[r._v("作为静态数据结构属性，react 15 是stack，16是Fiber")]),r._v(" "),t("li",[r._v("虚拟DOM，作为静态的数据结构")]),r._v(" "),t("li",[r._v("作为动态工作单元，双缓存的工作原理")])]),r._v(" "),t("h3",{attrs:{id:"调试源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试源码"}},[r._v("#")]),r._v(" 调试源码")]),r._v(" "),t("p",[r._v("使用 npm link 的方式引用包")]),r._v(" "),t("h3",{attrs:{id:"源码的目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码的目录结构"}},[r._v("#")]),r._v(" 源码的目录结构")]),r._v(" "),t("ul",[t("li",[r._v("packages\n"),t("ul",[t("li",[r._v("react: 与平台无关")]),r._v(" "),t("li",[r._v("scheduler：调度器")]),r._v(" "),t("li",[r._v("react-reconciler：协调器")]),r._v(" "),t("li",[r._v("react-dom：渲染器")]),r._v(" "),t("li",[r._v("shared：公共文件")])])]),r._v(" "),t("li",[r._v("scripts：工具链")]),r._v(" "),t("li",[r._v("fixtures：开发者使用的测试项目")])]),r._v(" "),t("hr"),r._v(" "),t("h2",{attrs:{id:"架构篇-render阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构篇-render阶段"}},[r._v("#")]),r._v(" 架构篇 render阶段")]),r._v(" "),t("h3",{attrs:{id:"工作流程概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作流程概览"}},[r._v("#")]),r._v(" 工作流程概览")]),r._v(" "),t("h3",{attrs:{id:"jsx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsx"}},[r._v("#")]),r._v(" JSX")]),r._v(" "),t("p",[r._v("JSX 与 Fiber 关系："),t("br"),r._v("\n什么是react element：react.createElement 调用的结果"),t("br"),r._v("\n什么是react component：")]),r._v(" "),t("p",[r._v("Host Component")])])}),[],!1,null,null,null);e.default=v.exports}}]);