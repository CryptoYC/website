const tinypng = require("tinypng-fs");
tinypng
  .minifyDir(
    "./static/images/index/logo",
    "./static/images/index/logo"
  )
  .then(e => {
    console.log("压缩完了", e);
  });