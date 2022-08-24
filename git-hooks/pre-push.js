const { execSync } = require('child_process');

// pre-push钩子执行以下命令：获取本地HEAD与origin/master的文件差异
const files = execSync('git diff origin/master HEAD --name-status')

console.log("push之前",files)

process.exit(1)