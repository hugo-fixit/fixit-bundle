const fs = require('fs');
const path = require('path');

// Read the go.sum file
const goSumPath = path.resolve(__dirname, 'go.sum');
const goSumContent = fs.readFileSync(goSumPath, 'utf-8');
const goSumList = goSumContent.split('\n').map((item) => {
  const [link, version] = item.split(' ');
  const name = link.split('/')[2];
  return {
    name,
    link: `https://${link}`,
    version,
  };
}).filter((item) => item.name && !item.version.endsWith('/go.mod'));

/**
 * Generates content from a list of items and updates specified README files with the generated content.
 * @param {array} list An array of objects, each containing `name`, `version`, and `link` properties.
 * @param {array} readmeList An array of file paths to README files that need to be updated.
 */
function generateContent(list, readmeList) {
  const content = list.map((item) => {
    return `- [${item.name} ${item.version}](${item.link})`;
  }).join('\n');

  const start = '<!-- COMPONENT_LIST_START -->';
  const end = '<!-- COMPONENT_LIST_END -->';
  readmeList.forEach((readme) => {
    const readmePath = path.resolve(__dirname, readme);
    const readmeContent = fs.readFileSync(readmePath, 'utf-8');
    const startIndex = readmeContent.indexOf(start) + start.length;
    const endIndex = readmeContent.indexOf(end);
    const newReadmeContent = `${readmeContent.substring(0, startIndex)}\n${content}\n${readmeContent.substring(endIndex)}`;
    fs.writeFileSync(readmePath, newReadmeContent);
  });
}

generateContent(goSumList, ['README.md', 'README.en.md']);
