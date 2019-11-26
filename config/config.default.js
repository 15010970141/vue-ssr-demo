
const path = require('path');

exports.keys = "123456";
// exports.view = {
//     defaultViewEngine: 'nunjucks',
//     mapping: {
//       '.tpl': 'nunjucks',
//     },
//   };
exports.security = {
  xframe: {
    enable: false
  },
  csrf: {
    // 忽略csrf检查
    ignore: ["/user", "/api"]
  }
};
// 日志配置
exports.logger = {
  dir: path.join(process.cwd(), "logs"),
  level: "DEBUG", // NONE，DEBUG，INFO，WARN，ERROR
  allowDebugAtProd: true, // 开启生产debug日志
  consoleLevel: "DEBUG",
  encoding: "utf-8",
  outputJSON: false,
  appLogName: `demo-web.log`,
  coreLogName: "egg-web.log",
  agentLogName: "egg-agent.log",
  errorLogName: "common-error.log"
};
