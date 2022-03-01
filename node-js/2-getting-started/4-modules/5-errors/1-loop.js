
// const fs = require('fs');

// const files = ['./2-try.js', './3-throw.js'];

// files.forEach(file => {
//   const data = fs.readFileSync(file);
//   console.log('File data is', data);
// });


// My code .. try..

const fs = require('fs');

const files = ['./2-try.js', './someFile.js', './3-throw.js'];

files.forEach(file => {
  try {
    const data = fs.readFileSync(file, 'dkdd');
    console.log('File data is ', data);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Mate the file isnt there');
    } else {
      console.log('YOUR CODE IS SHIT');
      throw err;
    }
  }
})