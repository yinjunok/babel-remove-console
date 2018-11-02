// types 是 babel.types, 里面提供里很多辅助工具.
// 参考 https://babel.bootcss.com/docs/core-packages/babel-types/
module.exports = function ({ types: t }) {
  return {
    visitor: {
      /**
       * babel 对 ast 的遍历是经典的 visitor 模式. 访问到相应类型节点的时候会调用相应的方法.
       * visitor 模式: https://zh.wikipedia.org/wiki/%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F
       * console.* 的类型是 MemberExpression 类型. 所以, 我们要实现一个 MemberExpression 的访问器, 然后在里面操作节点.
       * 
       * path 是遍历 ast 时候的路径, 里面的 node 是 ast 上的节点.
       * path 还提供了操作 ast 的方法.
       * 参考: https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
       * opts 是 .babelrc 传过来的配置信息.
       * */
      MemberExpression(path, { opts }) {
        // 当这个 MemberExpression 表达式的名字是 console, 并且调用的方法在配置里, 那么就移除这个节点.
        if (path.node.object.name === 'console') {
          if (opts.remove.indexOf(path.node.property.name) !== -1)
            path.getStatementParent().remove();
        }
      }
    }
  };
};
