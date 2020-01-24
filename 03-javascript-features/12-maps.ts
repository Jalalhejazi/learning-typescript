// Working with map()


const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray) // [4, 6, 8, 10, 70]



//////////////////////////////////////////////////////////

const myUsers = [
    { name: 'chuloo', likes: 'grilled chicken' },
    { name: 'chris', likes: 'cold beer' },
    { name: 'sam', likes: 'fish biscuits' }
]
const usersByFood = myUsers.map(item => {
    const container = {}
    container[item.name] = item.likes
    return container
})

console.log( usersByFood )
/*
    {chuloo: "grilled chicken"}
    {chris: "cold beer"}
    {sam: "fish biscuits"}
*/


///////////////////////////////////////////////////////////////
// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
]
// What you need
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














