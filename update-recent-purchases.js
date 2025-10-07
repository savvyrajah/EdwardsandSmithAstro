import fs from 'fs';
import path from 'path';

const recentPurchasesDir = 'src/pages/recent-purchases';

// Function to recursively get all .astro files
function getAllAstroFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllAstroFiles(fullPath));
    } else if (item.endsWith('.astro') && !item.includes('index')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Function to extract location from breadcrumb
function extractLocationFromBreadcrumb(content) {
  const breadcrumbMatch = content.match(/<a href="\/([^/]+)\/recent-purchases">([^<]+)<\/a>/);
  if (breadcrumbMatch) {
    return {
      region: breadcrumbMatch[1],
      regionName: breadcrumbMatch[2]
    };
  }
  return null;
}

// Function to extract property name from title
function extractPropertyName(content) {
  const h1Match = content.match(/<h1>([^<]+)<\/h1>/);
  if (h1Match) {
    return h1Match[1];
  }
  return null;
}

// Update each file
const files = getAllAstroFiles(recentPurchasesDir);

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');

  // Check if already has Breadcrumbs import
  if (content.includes('import Breadcrumbs')) {
    console.log(`Skipping ${file} - already has Breadcrumbs`);
    continue;
  }

  const location = extractLocationFromBreadcrumb(content);
  const propertyName = extractPropertyName(content);

  if (!location || !propertyName) {
    console.log(`Skipping ${file} - could not extract location or property name`);
    continue;
  }

  // Update imports
  let updatedContent = content.replace(
    /import Footer from '\.\.\/\.\.\/\.\.\/components\/Footer\.astro';/,
    `import Footer from '../../../components/Footer.astro';\nimport Breadcrumbs from '../../../components/Breadcrumbs.astro';\nimport LastUpdated from '../../../components/LastUpdated.astro';`
  );

  // Replace hardcoded breadcrumb with component
  const breadcrumbRegex = /<div class="breadcrumb">[\s\S]*?<\/div>/;
  const breadcrumbReplacement = `<Breadcrumbs items={[{name: "${location.regionName}", url: "/${location.region}/recent-purchases"}, {name: "${propertyName}", url: "${file.replace('src/pages', '').replace('.astro', '')}"}]} />
        <LastUpdated date="2025-01-15" />`;

  updatedContent = updatedContent.replace(breadcrumbRegex, breadcrumbReplacement);

  fs.writeFileSync(file, updatedContent);
  console.log(`Updated ${file}`);
}

console.log('Done!');
