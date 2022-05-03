const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout


const myEmitter = new EventEmitter();

myEmitter.on('TEST_EVENT', () => {
    console.log('EMITTING!!!!');
});


for (let i = 0; i === 20; i++) {
    if ( i === 8  ) {
        myEmitter.emit('TEST_EVENT');
    }
}
