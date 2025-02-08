const EventEmitter = require('events');
const emitter = new EventEmitter();
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
emitter.on('greet', greetUser);
emitter.emit('greet', 'Shruthi');  
emitter.once('greet', (name) => {
  console.log(`Once listener says hello to ${name}`);
});
emitter.emit('greet', 'Asima');  
emitter.emit('greet', 'Sofiya');