/**
 * @type {import("prettier").Config}
 * @see: https://www.prettier.cn
 */
module.exports = {
  // 一行最多 100 字符（代码可读性更好）
  printWidth: 100,
  // 缩进 2 个空格（通用风格）
  tabWidth: 2,
  // 使用制表符缩进
  useTabs: true,
  // 语句末尾加分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象属性是否加引号：仅在必要时
  quoteProps: 'as-needed',
  // 对象与大括号之间留空格 { foo: bar }
  bracketSpacing: true,
  // JSX 中使用双引号（和 HTML 属性一致）
  jsxSingleQuote: false,
  // 多行时尽可能打印尾随逗号
  trailingComma: 'es5',
  // 箭头函数参数只有一个时省略括号
  arrowParens: 'avoid',
  // 文件结尾换行符风格
  endOfLine: 'lf',
  // 不强制添加 @prettier 注释
  insertPragma: false,
  requirePragma: false,
  // Markdown 折行规则
  proseWrap: 'preserve',
  // HTML 空格敏感度
  htmlWhitespaceSensitivity: 'css',
  // Vue 中 <script> 与 <style> 不缩进
  vueIndentScriptAndStyle: false,
};
