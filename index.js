
//class creation
const Person = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}
//adding method to prototype, this will be inhereted by all instances of person
Person.prototype.smokeAJoint = function(amount){
    console.log(this.name + ' smoked ' + amount +' grams of weed.')
};
//instantiating a new person called john 
const john = new Person('john',15,'student');
john.job = 'dealer';

console.log(john.name);
console.log(john.age);
console.log(john.job);
//makes john smoke two grams of marijuana
john.smokeAJoint(2);


function showAllElements(){
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
        console.log(all[i]);
    }
}

window.onload =function(){  

    let titleHolder  = document.getElementById('huno');
    console.log(titleHolder);
    titleHolder.onclick = hideTitle;

}



function hideTitle(){
    let titleHolder  = document.getElementById('huno');
    titleHolder.style.display = 'none';
};