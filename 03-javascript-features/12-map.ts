// Working with map()

// What you have from API
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
]
// What you need is only officersID
// [20, 24, 56, 88]


// Solution using forEach loop:
let solution01 = []
officers.forEach(function (officer) {
  solution01.push(officer.id)
})


// Solution using map loop:
let solution02 = officers.map(function (officer) {
  return officer.id
})

// Solution using map loop and arrow function
const solution03 = officers.map(officer => officer.id)

/*
So how does .map() work? 
Basically is takes 2 arguments, a callback and an optional context (will be considered as this in the callback) 
which I did not use in the previous example. 
The callback runs for each value in the array and returns each new value in the resulting array.
Keep in mind that the resulting array will always be the same length as the original array.
*/














