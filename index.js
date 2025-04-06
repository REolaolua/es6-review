import { Person, fetchData, delayedMessage, capitals } from './tools.js';


const user = new Person("Rola", 18);
console.log(user.greet());



fetchData().then((result) => {
    console.log(result);
});

delayedMessage("Hello after 2 second!", 2000).then((msg) => {
    console.log(msg);
});

for (let [county, capital] of capitals.entries()) {
    console.log('The capital of ${country} is ${capital}');
}
