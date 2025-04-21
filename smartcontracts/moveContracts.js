const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build/contracts');
const destDirs = [path.join(__dirname, '../Backend/contracts'), path.join(__dirname, '../ionic/src/assets/contracts')];

// Funkce pro mazání složky rekurzivně
function deleteFolderRecursive(directory) {
    if (fs.existsSync(directory)) {
        fs.rmSync(directory, { recursive: true, force: true });
        console.log(`Složka ${directory} byla smazána.`);
    }
}

// Funkce pro kopírování složky
function copyFolderRecursive(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyFolderRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
    console.log(`Složka ${src} byla zkopírována do ${dest}.`);
}

// Smazání starých složek a kopírování nových kontraktů
for (let dest of destDirs) {
    deleteFolderRecursive(dest);
    copyFolderRecursive(buildDir, dest);
}
