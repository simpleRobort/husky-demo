const { execSync } = require('child_process');

// commit钩子执行如下命令：获取暂存区与上一次commit的差异
const files = execSync(`git diff --cached --name-status`)


// process.exit(1)

