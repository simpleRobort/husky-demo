const { execSync } = require('child_process');

const files = execSync(`git diff-index --cached HEAD`)

console.log('提交前',files)

