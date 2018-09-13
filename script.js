var name = "Diane";

var age = 31;

//below is the shortest way to do it, but the most specific way to do it too.
//console.log(5*age);

//here is another way to do it, and this would be more general than what's above - which I'd prefer.
var fiveTimesAge = 5*age;
console.log(fiveTimesAge);

var last_name = "Wee";

//way 1
//console.log(name + " " + last_name);

//way 2
var full_name = name + " " + last_name;
console.log(full_name);

var fruits = [
];
fruits.push("Apples", "Oranges", "Pears", "Bananas", "Cherries" );

console.log(fruits.length);
console.log(fruits[0]);
//if I use an equation, there will be "a number" (1, for the -1 part) involved within that equation...
console.log( fruits[fruits.length-1] );

var animal_a = {
    type: "cat",
    age: 6,
    name: "Fry",
    speak: "Meow!",
};
var animal_b = {
    type: "dog",
    age: 3,
    name: "Mabel",
    speak: "Wooooof!",
};
animal_b.is_outdoor = true;
console.log( animal_b.name, animal_b.age );




//I'm just checking here
//console.log(name, age, fruits, animal_a, animal_b);
