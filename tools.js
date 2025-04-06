class Person {
  constructor(name, age) {
    this.name = name;
    this.age =age;
  }


  greet(){
    return 'Hello, my name is ${this.name} and I am ${this.age} years old.';

  }
}

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fettched and successfully!");
        }, 1000);
    });

}
function delayedMessage(msg, delay){
    return new Promise((resolve) => {
        setTimeout(() => resolve(msg), delay);
    });
}

const capitals = new Map();
capitals.set("France", "Paris");
capitals.set("Japan", "Tokyo");
capitals.set("India", "New Delhi");

export { Person, fetchData, delayedMessage, capitals};