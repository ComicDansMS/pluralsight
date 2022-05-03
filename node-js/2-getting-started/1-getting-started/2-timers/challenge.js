// Challenge 1

const greetingTimeout = delay => {
    setTimeout(() => {
        console.log('Hello World. ' + delay);
        greetingTimeout(delay + 1);
    }, 1000 * delay)
}

// greetingTimeout(1);


// Challenge 2

let lastIntervalId, counter = 5;

const greetingInterval = delay => {
    if (counter === 5) {
        clearInterval(lastIntervalId);
        lastIntervalId = setInterval(() => {
            console.log("Hello World. " + delay);
            greetingInterval(delay + 100);
        }, delay);
        counter = 0
    }
    counter ++;
}

// greetingInterval(100);