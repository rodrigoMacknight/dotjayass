

var Person = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}

var john = new Person('john',15,'student');

console.log(john.name);
console.log(john.age);
console.log(john.job);