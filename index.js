
//class creation
var Person = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}
//adding method to prototype, this will be inhereted by all instances of person
Person.prototype.smokeAJoint = function(amount){
    console.log(this.name + ' smoked ' + amount +' grams of weed.')
};
//instantiating a new person called john 
var john = new Person('john',15,'student');

console.log(john.name);
console.log(john.age);
console.log(john.job);
//makes john smoke two grams of marijuana
john.smokeAJoint(2);