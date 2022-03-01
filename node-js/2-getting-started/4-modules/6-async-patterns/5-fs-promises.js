// const { readFile } = require('fs').promises;

// async function main() {
//   const data = await readFile(__filename);
//   console.log('File data is', data);
// }

// main();

// console.log('TEST');



// My code

const { readFile } = require('fs').promises;
const { writeFile } = require('fs').promises;


async function main(file) {
  const data = await readFile(file)
  console.log('File reading complete');
  console.log('Writing data...');
  await writeFile('newfile.xlsx', data);
  console.log('file written');
}

main('./Roasting.xlsx');