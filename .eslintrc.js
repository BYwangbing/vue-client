module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
/*
 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
  主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
  "off" -> 0 关闭规则
  "warn" -> 1 开启警告规则
  "error" -> 2 开启错误规则
*/
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'space-before-function-paren': 0,//函数左边不要有括号
    'indent': 0, //script的缩进
    "no-unused-vars": 1, // 不能有声明后未被使用的变量或参数
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
