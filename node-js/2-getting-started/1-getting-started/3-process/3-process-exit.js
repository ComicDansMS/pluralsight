setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
  console.log('Process will exit. Bye!!');
})

console.log('Hello!');