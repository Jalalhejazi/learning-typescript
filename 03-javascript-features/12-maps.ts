
const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})
console.log(sweeterArray) // [4, 6, 8, 10, 70]











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

