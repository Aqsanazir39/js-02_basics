//singleton
//object.create

//object literal
const mySym = Symbol("Key1");

const jsUser = {
name: "Aqsa",
age : "18",
[mySym] : "Key1",
location: "Abbottabad",
isLoggedIn : false,
lastLoginDays: ["Monday","Friday"]
}

// console.log(jsUser.age);
// console.log(jsUser["location"]);
// console.log( jsUser[mySym]);
console.log(typeof[mySym]);


jsUser.age = "72";
console.log(jsUser.age);


//freeze the object

// Object.freeze(jsUser);
jsUser.age = "45";
console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello js user");
}

jsUser.greetingTwo = function(){
  console.log(`Hello Aqsa , ${this.name}`);
}
console.log(jsUser.greetingTwo());

console.log(jsUser.greeting());
