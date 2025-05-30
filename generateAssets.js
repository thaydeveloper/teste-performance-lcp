const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'public/assets/icons');
const profileDir = path.join(__dirname, 'public/assets/profiles');
const imagesDir = path.join(__dirname, 'public/assets/images');

const outputIconsFile = path.join(__dirname, 'src/shared/assets/icons.ts');
const outputProfilesFile = path.join(__dirname, 'src/shared/assets/profiles.ts');
const outputImagesFile = path.join(__dirname, 'src/shared/assets/images.ts');
const outputInterfacesFile = path.join(__dirname, 'src/shared/assets/assets.interfaces.ts');

// Função para converter para camelCase
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, group1) => group1.toUpperCase()).replace(/\.webp$/, '');
}

const iconsFiles = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.webp'));
const profilesFiles = fs.readdirSync(profileDir).filter((f) => f.endsWith('.webp'));
const imagesFiles = fs.readdirSync(imagesDir).filter((f) => f.endsWith('.webp'));

// Gerar arquivo de interfaces
const interfacesContent = `// Arquivo gerado automaticamente por generateAssets.js\n\nexport type IconName =
  | ${iconsFiles.map((f) => `'${toCamelCase(f)}'`).join('\n  | ')};
export type ProfileName =
  | ${profilesFiles.map((f) => `'${toCamelCase(f)}'`).join('\n  | ')};
export type ImageName =
  | ${imagesFiles.map((f) => `'${toCamelCase(f)}'`).join('\n  | ')};

export interface Assets {
  icons: Record<IconName, string>;
  profiles: Record<ProfileName, string>;
  images: Record<ImageName, string>;
}
`;

fs.writeFileSync(outputInterfacesFile, interfacesContent);
console.log('Arquivo src/shared/assets/assets.interfaces.ts gerado com sucesso!');

// Gerar arquivo de icons
let importsIcons = "import type { IconName } from './assets.interfaces';\n";
importsIcons +=
  iconsFiles
    .map((file) => `import ${toCamelCase(file)} from '@public/assets/icons/${file}';`)
    .join('\n') + '\n';
let exportsIcons = 'const icons: Record<IconName, string> = {\n';
exportsIcons +=
  iconsFiles.map((file) => `  ${toCamelCase(file)}: ${toCamelCase(file)}.src,`).join('\n') + '\n';
exportsIcons += '};\n\nexport default icons;\n';
fs.writeFileSync(outputIconsFile, importsIcons + '\n' + exportsIcons);
console.log('Arquivo src/shared/assets/icons.ts gerado com sucesso!');

// Gerar arquivo de profiles
let importsProfiles = "import type { ProfileName } from './assets.interfaces';\n";
importsProfiles +=
  profilesFiles
    .map((file) => `import ${toCamelCase(file)} from '@public/assets/profiles/${file}';`)
    .join('\n') + '\n';
let exportsProfiles = 'const profiles: Record<ProfileName, string> = {\n';
exportsProfiles +=
  profilesFiles.map((file) => `  ${toCamelCase(file)}: ${toCamelCase(file)}.src,`).join('\n') +
  '\n';
exportsProfiles += '};\n\nexport default profiles;\n';
fs.writeFileSync(outputProfilesFile, importsProfiles + '\n' + exportsProfiles);
console.log('Arquivo src/shared/assets/profiles.ts gerado com sucesso!');

// Gerar arquivo de images
let importsImages = "import type { ImageName } from './assets.interfaces';\n";
importsImages +=
  imagesFiles
    .map((file) => `import ${toCamelCase(file)} from '@public/assets/images/${file}';`)
    .join('\n') + '\n';
let exportsImages = 'const images: Record<ImageName, string> = {\n';
exportsImages +=
  imagesFiles.map((file) => `  ${toCamelCase(file)}: ${toCamelCase(file)}.src,`).join('\n') + '\n';
exportsImages += '};\n\nexport default images;\n';
fs.writeFileSync(outputImagesFile, importsImages + '\n' + exportsImages);
console.log('Arquivo src/shared/assets/images.ts gerado com sucesso!');
