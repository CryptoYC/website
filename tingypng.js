const tinypng = require("tinypng-fs");
tinypng
  .minifyDir(
    "./static/images/index/logo",
    "./static/images/index/logo"
  )
  .then(e => {
    console.log("压缩完了", e);
  });
// tinypng
//   .minifiyFile(
//     "../src/190306PizzaIWD/assets/tab/24171551954476_.pic_hd.jpg",
//     "../src/190306PizzaIWD/assets/tab/contain_realGold.png"
//   )
//   .then(e => {
//     console.log("压缩完了", e);
//   });