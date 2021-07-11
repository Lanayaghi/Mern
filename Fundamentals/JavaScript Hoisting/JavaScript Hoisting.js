// our prediction is after :"//"

//First:
console.log(example);
var example = "I'm the example!"; //undefined

//second:
console.log(example);
let example = "I'm the example!"; // example can't be reached because it's not initialized yet

third:
console.log(hello);                                   
var hello = 'world'; //udefined

Fourth:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); //magnet
}

//fifth:
var brendan = 'super cool';
function print(){
    brendan = 'only okay'; // "only okay" 
    console.log(brendan);
}
console.log(brendan);// "super cool"
// wrong prediction because we forgot that the function has never been called  


//sixth:
var food = 'chicken'; //chicken
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);//half-chicken
    var food = 'gone';// want hoist because food was already declared
}

//seventh :
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//mean is not a function so it cannot be called .

//eightth:
console.log(genre);//undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);//rock
    var genre = "r&b";
    console.log(genre);//r&b
}
console.log(genre);//disco

//nineth:
dojo = "san jose";
console.log(dojo);//san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);//seattle
    var dojo = "burbank";
    console.log(dojo);//burbank
}
console.log(dojo);//san jose

//tenth:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// error of a constant variable , it can not be assigned twice .