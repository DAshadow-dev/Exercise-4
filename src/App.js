import logo from './logo.svg';
import './App.css';
console.warn('Bài 1');
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]
//   •	Find the first person off the people array is teenager (age >=10 and age <=20)
//   •	Find the all person of the people array is teenager (age >=10 and age <=20)
//   •	Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
//   •	Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.
  const firstPerson = people.find(person => person.age >=10 && person.age <=20)
  const secondListPerson = people.filter(person => person.age >=10 && person.age <=20)
  const thirdPerson = people.every(person => person.age >=10 && person.age <=20)
  const fourthPerson = people.some(person => person.age >=10 && person.age <=20)

  console.log('First person: ', firstPerson);
  console.log('All person: ', secondListPerson);
  console.log('Are every people?  ', thirdPerson);
  console.log('Any Person? ', fourthPerson);

console.warn('Bài 2');
var array = [1, 2, 3, 4]
const sum =array.reduce((acc,val)=> acc + val,0)
console.log(sum);

console.warn('Bài 3');
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};
// •	Print the name of each company using forEach
companies.forEach(c=>console.log(c.name))
// •	Print the name of each company that started after 1987
companies.forEach(c=>c.start > 1987 ? console.log(c.name):'')
//•	Get only the companies that have category Retail, 
//increment their start by 1 and append in the DOM a div that has the name, 
//the category, the start and the end in paragraphs elements
const list = companies.filter((c)=> c.category === 'Retail')
list.map((item)=> item.start++)
list.forEach((item)=> {
  console.log(`${item.name}   ${item.start}   ${item.end}`);
})
// •	Sort the companies based on their end date in ascending order
companies.sort((a,b)=> a.end - b.end)
console.log(companies);
// •	Sort the ages array in descending order
ages.sort((a,b)=> b-a)
console.log(ages);
// •	Print the sum if you add all the ages using reduce
const sumAge = ages.reduce((acc,val)=> acc + val,0)
console.log(sumAge);
// •	Make a new object that has the properties of name and category same as 
// the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS
const {name, category} = companies[0]
const newObj = {
  name, 
  category,
  print: function(){
    console.log(this.name, this.category)
  }}
newObj.print()
// •	Create a function that takes an unknown number of arguments that are numbers and return their sum;
const sumNumbers = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumNumbers(1,2,3))
// •	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array,
//  if the argument is an array, it should add its values to the array that will be returned by the function
const addToArray = (...rest) =>{
  let rs = [];
  rest.forEach((item) =>{
    if (Array.isArray(item)){
      rs = rs.concat(item);
    }
    else{
      rs.push(item);
    }
  })
  return rs;
}

console.log(addToArray('a',['b','c'],1,{name : 'An'}));
//•	Destructuring the property street in a variable named street from the object person
const {address: {street}} = person;
console.log(street);
// •	Write a function that every time you call it, it returns a number that increments starting from 0
const incrementFunction = () =>{
  let count = 0 
  return () => count++
}
const increment = incrementFunction()
console.log(increment());
console.log(increment());
console.log(increment());
//•	Create a function that destructors the query parameters of a URL and adds them in an object as key value pairs and then returns the object
const url = 'https://www.google.com/search?q=javascript&oq=ReactJS&aqs=chrome..69i57j69i60j69i61j69i60l2.100j0j7&sourceid=chrome&ie=UTF-8'
const getQueryParams = (url) => {
  const params = url.split('?')[1].split('&')
  const obj = {}
  params.forEach(p => {
    const [key, value] = p.split('=')
    obj[key] = value
  })
  return obj
}
console.log(getQueryParams(url));
console.warn('Bài 4');
class Shape {
  constructor(color) {
    this.color = color;
  }

  getArea(){
    return 0;
  }

  toString(){
    return `Color: ${this.color}`
  }
}
class Rectangle extends Shape {
  constructor(color,length,width){
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea(){
    return this.length*this.width
  }
  toString(){
    return `Color: ${super.color}, length: ${this.length}, width: ${this.width}`
  }
}
class Triangle extends Shape{
  constructor(color,base,height){
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea(){
    return (this.base*this.height)*0.5
  }
  toString(){
    return `Color: ${super.color}, base: ${this.base}, height: ${this.height}`
  }
}
const rectangle = new Rectangle('red',10,5)
const triangle = new Triangle('black',10,3);

console.log(`Rectangle: ${rectangle.toString()} has area ${rectangle.getArea()}`);
console.log(`Triangle: ${triangle.toString()} has area ${triangle.getArea()}`);


function App() {
  return (
    <></>
  );
}

export default App;
