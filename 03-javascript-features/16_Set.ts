const array = ['00','00','1','1','2','2','3','00','00']

// We want to remove the dublicates to this array ["00", "1", "2", "3"]

// Using Set() to remove dublicates
const unique_set = [...new Set(array)]
 

// Using Filter to remove dublicates
array.filter( (value,index) => array.indexOf(value) === index)


