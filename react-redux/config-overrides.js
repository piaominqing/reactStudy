const {override, fixBabelImports, addLessLoader, addDecoratorsLegacy} = require("customize-cra");
// `yarn add react-app-rewired customize-cra babel-plugin-import`
// ` yarn add less less-loader`
// npm install -D @babel/plugin-proposal-decorators

module.exports = override(
  fixBabelImports("import", {
    // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {"@primary-color": "red"}
  }),
  addDecoratorsLegacy()
);
