// Ref
const todo = "https://scotch.io/tutorials/4-uses-of-javascripts-arraymap-you-should-know"



const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray) // [4, 6, 8, 10, 70]

