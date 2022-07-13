//ex1 

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// output will be :
// I am John Doe from Vancouver, Canada. Latitude 49.2827 , Longitude -123.1207

//ex2

function displayStudentInfo(objUser){
    //destructuring
    let {first,last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//ex3

const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray);
for (let [key, value] of usersArray) {
    value *=2;
    console.log(`${key}: ${value}`);
    // console.log(usersArray);
  }

//ex4

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);

/*The output will be object from the class Person
*/


//ex5

class Dog {
    constructor(name) {
      this.name = name;
    }
  };


////2 will extend the class Dog -- which is 

  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

//ex6 

//1. false false 

//2.

const object1 = { number: 5 }; //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5}; //5

object1.number = 4;
console.log(object2.number) //4
console.log(object3.number) //4
console.log(object4.number) //5

//3.

class Animal{
  constructor(n,t,c){
    this.name = n;
    this.type = t;
    this.color = c;
  }
}

class Mamal extends Animal{
  constructor(n,t,c,bool=true){
    super(n,t,c);
    this.isMamal = bool;
    this.s="";
  
  }
  sound(animal_sound){
    this.s= animal_sound;
    return(`${animal_sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
  }
}

let farmerCow = new Mamal("Lily","cow","brown and white");
console.log(farmerCow.sound("Moooo"));

