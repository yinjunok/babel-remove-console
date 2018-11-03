const a = 'a';
console.log(a);

function sample() {
  // console.log 应该被删除
  console.log(arguments);
  // console.info 不应该被删除
  console.info(arguments);
  // console.debug 应该被删除
  console.debug(arguments);

  // 无法正确处理的情况
  const log = console.log;
  log("hello world");
  return () => {
    // console.log 应该被删除
    console.log(arguments);
    // console.error 不应该被删除
    console.error(arguments);
  }
}