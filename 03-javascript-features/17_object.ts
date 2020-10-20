/*
var old_school_way = new Object()
    old_school_way.name   = ""
    old_school_way.gender = ""
    old_school_way.job    = ""
*/

let user = {
    name : "Jalal",
    gender : "👨‍⚕️",
    job  : "DevOps Engineer"
}

Object.keys(user)       
// ["name", "gender", "job"]



Object.values(user)     
// ["Jalal", "👨‍⚕️", "DevOps Engineer"]



Object.entries(user) 
/* 
    0: ["name", "Jalal"]
    1: ["gender", "👨‍⚕️"]
    2: ["job", "DevOps Engineer"]
*/