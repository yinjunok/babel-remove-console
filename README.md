# 一个简易版的移除 console babel 插件.

演示如何实现一个 babel 插件.

文件说明:

`remove-console.js` 插件代码  
`sample-code.js `   测试代码

演示说明: 

1:
```bash
yarn install
```
2:
```bash
yarn run build
```

结果会输出到 `./lib/sample-code.js`;

具体实现直接看 `remove-console.js`, 没几行代码, 大部分都是注释.

这个只是展示一个最简单的 babel 插件如何编写, 所以只处理里最简单的情况, 面对一些复杂的情况, 就无法正确处理了. 比如有引用的情况:
```js
// 无法正确处理的情况
const log = console.log;
log("hello world");
```
编译后得到
```js
// 无法正确处理的情况
log("hello world");
```
实际项目中, 还是要在社区找有口碑的插件使用.

参考资料: https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md