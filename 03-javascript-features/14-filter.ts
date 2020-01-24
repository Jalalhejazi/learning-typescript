// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

/*
    What if you have an array, but only want some of the elements in it? 
    That’s where .filter() comes in!
*/

let pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
]


// Say we want two arrays now: one for rebel pilots, the other one for imperials. With .filter() it couldn’t be easier!

const rebels = pilots.filter(pilot => pilot.faction === "Rebels")

const empire = pilots.filter(pilot => pilot.faction === "Empire")


