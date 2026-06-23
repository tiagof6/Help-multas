const fs = require('fs');
const path = require('path');

function renameRecursive(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file === 'node_modules') {
                const newPath = path.join(dir, 'vendor');
                fs.renameSync(fullPath, newPath);
                console.log(`Renamed ${fullPath} to ${newPath}`);
                renameRecursive(newPath);
            } else {
                renameRecursive(fullPath);
            }
        }
    }
}

function fixAssets() {
    const distPath = path.join(__dirname, '../dist');
    renameRecursive(distPath);

    const jsDir = path.join(distPath, '_expo/static/js/web');
    if (fs.existsSync(jsDir)) {
        const files = fs.readdirSync(jsDir);
        for (const file of files) {
            if (file.endsWith('.js')) {
                const filePath = path.join(jsDir, file);
                let content = fs.readFileSync(filePath, 'utf8');
                // Replace ALL occurrences of /node_modules/ globally
                content = content.replace(/\/node_modules\//g, '/vendor/');
                fs.writeFileSync(filePath, content);
                console.log(`Updated paths in ${file}`);
            }
        }
    }
}

fixAssets();
