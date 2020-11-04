const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {
  // webpack相关配置
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("images", resolve("./src/assets/images"));
  }
};
