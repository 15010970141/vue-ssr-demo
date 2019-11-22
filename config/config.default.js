exports.keys = "123456";
// exports.view = {
//     defaultViewEngine: 'nunjucks',
//     mapping: {
//       '.tpl': 'nunjucks',
//     },
//   };
  exports.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      // 忽略csrf检查
      ignore: ['/user','/api'],
    },
  };