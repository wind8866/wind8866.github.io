(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{426:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("<script>")]),t._v(" 标签")]),t._v(" "),a("ul",[a("li",[t._v("type：模块")]),t._v(" "),a("li",[t._v("src")])]),t._v(" "),a("h2",{attrs:{id:"现代模式【重要】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现代模式【重要】"}},[t._v("#")]),t._v(" 现代模式【重要】")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码以现代模式（严格模式）工作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放在函数中则该函数是现代模式工作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("现代模式（严格模式）与非严格模式的区别")]),t._v(" "),a("ul",[a("li",[t._v("全局变量必须显示声明，否则报错")]),t._v(" "),a("li",[t._v("静态绑定\n"),a("ul",[a("li",[t._v("禁止使用 with")]),t._v(" "),a("li",[t._v("eval 有单独的作用域，声明的变量只能用于内部，不可改变外部变量")])])]),t._v(" "),a("li",[t._v("function 在全局环境中 this 指向 undefined")]),t._v(" "),a("li",[t._v("函数中的 arguments 无法使用 funcName.arguments 调用")]),t._v(" "),a("li",[t._v("禁止删除变量，除非单独设置。非严格模式静默失败")]),t._v(" "),a("li",[t._v("只读属性赋值会报错、禁止添加属性的对象增加属性会报错、删除不可删除的对象会报错")]),t._v(" "),a("li",[t._v("对象不能有重命名的属性，函数不能有重命名的参数")]),t._v(" "),a("li",[t._v("整数第一位为数字0会报错，八进制请使用"),a("code",[t._v("0o12")])]),t._v(" "),a("li",[t._v("arguments 赋值会报错")]),t._v(" "),a("li",[t._v("arguments 不再追踪参数变化，相当于解构赋值")]),t._v(" "),a("li",[t._v("不可使用 arguments.callee，无法在函数内调用自身")]),t._v(" "),a("li",[t._v("函数声明不能在块级作用域中")]),t._v(" "),a("li",[t._v("新增保留字")])]),t._v(" "),a("p",[t._v("其他："),a("br"),t._v("\n函数不能在块级作用域中声明，但是可以在表达式中声明，声明返回该函数"),a("br"),t._v("\nES2016 只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。因为进入函数前，可能以非严格模式处理参数，进入之后再改为严格模式，不符合逻辑。"),a("a",{attrs:{href:"https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/function.md#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源"),a("OutboundLink")],1),a("br"),t._v("\n自动采用严格模式：")]),t._v(" "),a("ul",[a("li",[t._v("模块")]),t._v(" "),a("li",[t._v("class")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("有些函数式编程语言禁止改动变量的地址，对其操作会拷贝出一份，在某些领域（并行计算）有好处。"),a("br"),t._v("\n可以使用中文作为变量名："),a("code",[t._v("let 我 = '你好'")]),a("br"),t._v("\n区分大小写"),a("br"),t._v("\n严格模式不使用 "),a("code",[t._v("let")]),t._v("、"),a("code",[t._v("const")]),t._v("、"),a("code",[t._v("var")]),t._v(" 直接赋值会报错。"),a("br"),t._v("\n优先使用 "),a("code",[t._v("let")]),t._v("，常量使用"),a("code",[t._v("const")]),t._v("，硬编码的值最好大写，非硬编码的值还是小写。"),a("br"),t._v("\n变量名在能够准确描述变量的同时要足够简洁。不好的例子就是 data 和 value，这样的名称等于什么都没说。"),a("br"),t._v("\n尽量让一个变量对应一个值，不会带来性能问题。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("JS 中的数学运算都是安全的。"),a("br"),t._v("\n特殊的数字：Infinity、NaN"),a("br"),t._v("\n特别大的值使用 BigInt："),a("code",[t._v("const bigInt = 1234567890123456789012345678901234567890n;")])]),t._v(" "),a("p",[t._v("JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。"),a("br"),t._v("\nundefined 的含义是未被赋值。")]),t._v(" "),a("p",[a("strong",[t._v("typeof")]),a("br"),t._v('\ntypeof null 会返回 "object" —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 object。'),a("br"),t._v("\ntypeof 后跟一个函数返回'function'"),a("br"),t._v("\ntypeof 支持大数类型判断")]),t._v(" "),a("p",[t._v("现在JS有8种数据类型。")]),t._v(" "),a("ul",[a("li",[t._v("Null")]),t._v(" "),a("li",[t._v("Undefined")]),t._v(" "),a("li",[t._v("String\n"),a("ul",[a("li",[t._v("''")]),t._v(" "),a("li",[t._v("'aaa'")])])]),t._v(" "),a("li",[t._v("Number\n"),a("ul",[a("li",[t._v("0")]),t._v(" "),a("li",[t._v("NaN")]),t._v(" "),a("li",[t._v("Infinity")]),t._v(" "),a("li",[t._v('1000000000000000000000("1e+21")')]),t._v(" "),a("li",[t._v("0x")])])]),t._v(" "),a("li",[t._v("Boolean\n"),a("ul",[a("li",[t._v("false")]),t._v(" "),a("li",[t._v("true")])])]),t._v(" "),a("li",[t._v("Symbal")]),t._v(" "),a("li",[t._v("Object")]),t._v(" "),a("li",[t._v("BigInt")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"类型转换【重要】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换【重要】"}},[t._v("#")]),t._v(" 类型转换【重要】")]),t._v(" "),a("p",[t._v("对于类型转换，我们应该从几个方向去考虑："),a("br"),t._v("\n1、转换方法是否安全：例如 "),a("code",[t._v("localStorage.getItem('a')")]),t._v(" 可能返回 null，如果对结果使用 "),a("code",[t._v("toString")]),t._v(" 将会报错。"),a("br"),t._v("\n2、转化的类型是否是自己想要的（处理边缘情况）："),a("code",[t._v("0.1 + 0.2")]),t._v(" 得到的并不是 0.3。")]),t._v(" "),a("p",[a("strong",[t._v("转换为字符串类型")]),a("br"),t._v("\n隐式转换：需要用到字符串的地方，例如：alert、加法运算符"),a("code",[t._v("'' + a")]),t._v("、对象的键名key"),a("br"),t._v("\n显示转换：a.toString()、String(a)、a.valueOf()、a.toLocaleString()、特殊的转换(toLocaleLowerCase、toLocaleUpperCase、toLowerCase、toUpperCase)、数字转字符串（number.toFixed(4)舍、number.toExponential()、number.toPrecision()有效数字）")]),t._v(" "),a("p",[t._v("String() 是最安全的转换方法。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要注意的是特别大的数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000000000000000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1e+21"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意可能返回 NaN 1e+21 Infinity 等数据，注意区分和处理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ture")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e+40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocaleString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "10000000000000000000000000000000000000000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFinite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进制自动转换")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x13333")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"78643"')]),t._v("\n")])])]),a("p",[a("strong",[t._v("转换为数字类型")]),a("br"),t._v("\n隐式转换：函数算数和表达式中，例如：一元加运算符"),a("code",[t._v("+var")]),t._v("、"),a("code",[t._v("+-*/%")]),t._v("等等"),a("br"),t._v("\n显示转换：Number、特殊的转换（parseInt()、parseFloat()、Math.ceil()、Math.floor()）")]),t._v(" "),a("p",[t._v("Number() 是最安全的转化方法，一元运算符"),a("code",[t._v("+")]),t._v("与他执行逻辑相同。"),a("br"),t._v("\n注意 null 返回 0"),a("br"),t._v("\nNumber 不会进行过多的容错处理，不能转化为数字直接返回NaN"),a("br"),t._v("\nstring\t去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 0。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 NaN。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'   13  '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'333.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 333.3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.3a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1e+40'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1e+40")]),t._v("\n")])])]),a("p",[a("strong",[t._v("转化为布尔类型")]),a("br"),t._v("\n隐式转换："),a("code",[t._v("!")]),t._v("、"),a("code",[t._v("if")]),t._v("、"),a("br"),t._v("\n显示转换：Boolean()")]),t._v(" "),a("p",[a("code",[t._v("!")]),t._v(" 与 Boolean() 执行逻辑一样"),a("br"),t._v(" "),a("code",[t._v("null")]),t._v("、"),a("code",[t._v("undefined")]),t._v("、"),a("code",[t._v("0")]),t._v("、"),a("code",[t._v("''")]),t._v("、"),a("code",[t._v("NaN")]),t._v("为 false，其他都为true")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),a("p",[a("code",[t._v("+")]),t._v("二元运算符，两侧只要有字符串，则都进行字符串转换。"),a("br"),t._v(" "),a("code",[t._v("+")]),t._v("一元运算符可进行类型转换，与Number逻辑相同。"),a("br"),t._v("\n语句 x = value 将值 value 写入 x 然后返回 x。"),a("br"),t._v(" "),a("code",[t._v("let b = 1;b += 1 + 1;")]),t._v(" 结果 b 为 3，因为"),a("code",[t._v("+")]),t._v("运算符优先级高于"),a("code",[t._v("+=")]),t._v("。")]),t._v(" "),a("p",[t._v("建议用“一行一个行为”")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"值的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值的比较"}},[t._v("#")]),t._v(" 值的比较")]),t._v(" "),a("p",[t._v("如果是字符串比较，使用 Unicode 编码顺序"),a("br"),t._v("\n不同类型的值进行比较时，JavaScript 会首先将其转化为数字"),a("br"),t._v(" "),a("code",[t._v("null == undefined")]),t._v("，这是他们自己独立的比较规则，不会出现其他类型的值相等，所以可以利用这个特性。"),a("br"),t._v("\n而 "),a("code",[t._v("> < >= <=")]),t._v(" 等运算符的 null 会转化为 0。"),a("br"),t._v("\nNaN 不等于任何值")]),t._v(" "),a("p",[t._v("我们需要更为可靠的方法来避免潜在的问题，而不是记住古怪的规则。"),a("br"),t._v("\n对一个值进行比较，我们应该考虑这个值是不是有可能是："),a("code",[t._v("null")]),t._v("、"),a("code",[t._v("undefined")]),t._v("、"),a("code",[t._v("NaN")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apple"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pineapple"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n0\\n"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n0\\n"')]),t._v("\n")])])]),a("p",[t._v("答案")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("true\nfalse\ntrue\ntrue\nfalse\nfalse：null 有特殊的比较规则，只等于 undefined、null\nfalse\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"条件分支-if-与"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件分支-if-与"}},[t._v("#")]),t._v(" 条件分支 if 与 ?")]),t._v(" "),a("p",[t._v("判断时要注意自动类型转换。"),a("br"),t._v("\n嵌套的三元运算符并不是特别复杂，但我认为不应该写。"),a("a",{attrs:{href:"https://zh.javascript.info/ifelse#duo-ge",target:"_blank",rel:"noopener noreferrer"}},[t._v("例子"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[t._v("#")]),t._v(" 逻辑运算符")]),t._v(" "),a("p",[t._v("要转变思想，逻辑运算符仅在判断时进行逻辑转换，返回值并不一定是布尔值，而是寻找第一个对("),a("code",[t._v("||")]),t._v(")或错("),a("code",[t._v("&&")]),t._v(")的值。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取变量列表或者表达式中的第一个真值")]),t._v("\nfirstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" lastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" nickName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Anonymous'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 寻找第一个假值")]),t._v("\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value3\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 短路执行，真执行第二个值")]),t._v("\nsex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'men'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("playGame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假执行第二个值")]),t._v("\nloading "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替代方案")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'men'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("palyGame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("是否使用逻辑运算符有争议，我现在想的是使用单行的形式替代，替代方案兼顾可读性与便捷性。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"空值合并运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空值合并运算符"}},[t._v("#")]),t._v(" 空值合并运算符 '??'")]),t._v(" "),a("p",[a("code",[t._v("??")]),t._v(" 可用来替代 "),a("code",[t._v("||")]),a("br"),t._v(" "),a("code",[t._v("a ?? b")]),t._v(" 如果 a 为 null/undefined，返回b，否则返回a"),a("br"),t._v("\n区别："),a("code",[t._v("||")]),t._v(" 返回第一个真值，"),a("code",[t._v("??")]),t._v(" 返回第一个已定义的值。"),a("br"),t._v(" "),a("code",[t._v("??")]),t._v(" 优先级比较低与算数运算符结合需要加括号")]),t._v(" "),a("h2",{attrs:{id:"循环-while-和-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环-while-和-for"}},[t._v("#")]),t._v(" 循环：while 和 for")]),t._v(" "),a("p",[t._v("break 跳出循环"),a("br"),t._v("\ncontinue 跳过本次循环")]),t._v(" "),a("p",[t._v("break 可以使用标签跳转到外层 for 循环")]),t._v(" "),a("h2",{attrs:{id:"switch-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-语句"}},[t._v("#")]),t._v(' "switch" 语句')]),t._v(" "),a("p",[t._v("switch 一定要写 default"),a("br"),t._v("\nswitch 判断是严格相等")]),t._v(" "),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("p",[t._v("函数在很长一段时间的一个作用是提供局部环境。")]),t._v(" "),a("p",[a("strong",[t._v("更好的函数")]),a("br"),t._v("\n函数命名最好有前缀，一般是动词。"),a("br"),t._v("\n一个函数一个行为：一个函数应该只包含函数名所指定的功能，而不是做更多与函数名无关的功能。"),a("br"),t._v("\n我们通过函数名就可以看出函数的行为，而不需要通过代码。人们通常把这样的代码称为自描述。"),a("br"),t._v("\n函数最好写清楚：做什么事，参数，返回结果。"),a("br"),t._v("\nTypeScript 就是一种特别好的自描述语言。"),a("br"),t._v("\n尽量不要有副作用")]),t._v(" "),a("p",[a("strong",[t._v("函数表达式")]),a("br"),t._v("\n函数是值。它们可以在代码的任何地方被分配，复制或声明。"),a("br"),t._v("\n如果函数在主代码流中被声明为单独的语句，则称为“函数声明”，如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。"),a("br"),t._v("\n函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。函数声明则不同，在函数声明被定义之前，它就可以被调用。"),a("br"),t._v(" "),a("strong",[t._v("严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。")]),a("br"),t._v("\n当我们需要声明一个函数时，首先考虑函数声明语法。它能够为组织代码提供更多的灵活性。因为我们可以在声明这些函数之前调用这些函数。仅当函数声明不适合对应的任务时，才应使用函数表达式。")]),t._v(" "),a("p",[t._v("因为函数声明有作用域及变量命名提升的问题，所以有时候函数声明并不适用。")])])}),[],!1,null,null,null);s.default=e.exports}}]);