const os = require("os");
console.log("architecture", os.arch());
console.log("memorey", os.freemem()/(1024*1024*1024));
console.log("total memory", os.totalmem()/(1024*1024*1024));
console.log("hostname ", os.hostname());
console.log("platform", os.platform());
console.log("user", os.userInfo());
console.log("home directory", os.userInfo().homedir);
console.log("username", os.userInfo().username);