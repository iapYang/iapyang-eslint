const fs = require('fs');
const path = require('path');

const eslintPath = path.resolve(__dirname, '../.eslintrc');
const oldReadmePath = path.resolve(__dirname, './README.md');
const newReadmePath = path.join(process.cwd(), './README.md');

const eslintContent = fs.readFileSync(eslintPath, 'utf-8');
const readmeContent = fs.readFileSync(oldReadmePath, 'utf-8');

fs.writeFileSync(
    path.join(process.cwd(), 'README.md'),
    readmeContent.replace('%%<replace code>%%', eslintContent),
    'utf-8'
);