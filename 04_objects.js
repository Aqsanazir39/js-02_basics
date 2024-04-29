// how to declare obj as constructor and singleton

// const tinderUser = new Object(); as a singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Aqsa"
tinderUser.logedIn = false
// console.log(tinderUser);  // as a non singleton object

const regularUser = {
  email : "some@gmail",
  fullname : {
    userfullName:"Aqsa Nazir",
    secondName : "M Nazir"
  }
}

// console.log(regularUser.fullname.userfullName);


const obj1 = {
  1: "a",
  2: "b"                  //obj within obj
}
const obj2 = {
  3: "c",
  4: "d"
}
// const obj3 = {obj1 , obj2}
// const returnedTarget = Object.assign({}, obj1 , obj2);
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
  {
    id : 1,
    email : "home.com"
  },
  {
    id : 67,
    email : "gdbs@kksdd"
  },
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('logedIn'));

const course = {
  coursename : "js",
  price : "788",
  courseInstructor : "hit",
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);


const navbar = {{company}} => {

}
navbar(company = "iron");

//  {
//   'namee': "Hite",
//   'coursenamee': "js in eng",
//   'pricee':   "free",

// }   //JSON

// [
                 //Json Talk
// {

// }
// {

// }
// {

// }

// ]

