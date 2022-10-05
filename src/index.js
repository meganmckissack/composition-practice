// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';


//------------------------------------------------
const paint = (color) => ({
  paints: ()  => {
    return `Paints ${color}!`;
  }
});

const painter1 = paint("green");
const painter2 = paint("yellow");
const painter3 = paint("red");
console.log(painter1.paints());
console.log(painter2.paints());
console.log(painter3.paints());

// const painterPerson = (color) => {
//   let painter = {
//     color
//   }
//   return {...painter, ...paint(painter)};
// };

//-----------------------------------------------

const noises = (noise) => ({
  sound: () => {
    return `${noise}`;
  }
});

const object = (noise) => {
  let soundMaker = {
    noise
  };
  return {...soundMaker, ...noises(noise)};
};

const faucet = object("Drip drip drip.");
const oldCar = object("Grumble grumble");
const sleepyBear = object("Grrr...yawn");
console.log(faucet.sound());
console.log(oldCar.sound());
console.log(sleepyBear.sound());

//----------------------------------------------

//throw(distance, speed);
// function throw(distance) {
//   return function(speed) {
//     return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour!`
//   }
// }

// const dist = (distance) => ({
//   throw: () => {
//     return `${distance}`;
//   }
// });

// const fast = (speed) => ({
//   throw: () => {
//     return `${speed}`;
//   }
// });

// const result = function(name) {
//   let state = {
//     name
//   }
//   return { ...state, ...dist(distance), ...fast(speed)}
// }

// const battleRobot1 = result();
// console.log(battleRobot1.throw(100)(200));