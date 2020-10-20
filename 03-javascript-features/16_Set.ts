const array = ['00','00','1','1','2','2','3','00','00']
// We want to remove the dublicates to this array ["00", "1", "2", "3"]

/* 
    Using Set() to remove dublicates

    Set is a new data object introduced in ES6. 
    Because Set only lets you store unique values. 
    When you pass in an array, it will remove any duplicate values.
*/

const unique_set = [...new Set(array)]
 

// Set() is using Filter to remove dublicates
array.filter( (value,index) => array.indexOf(value) === index)


// from set back to Array
let array_1 = [...unique_set]

let array_2 = Array.from(new Set(array))





