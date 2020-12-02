let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length);

secretMessage.pop();

// console.log(secretMessage.length);

secretMessage.push('to','Program');

// console.log(secretMessage.length);

secretMessage.splice(7,1,'right');

secretMessage.shift();

secretMessage.unshift('Programming');

// Start at element 6, replace the next 5 items with "know"...
secretMessage.splice(6,5,'know');

console.log(secretMessage.join());
