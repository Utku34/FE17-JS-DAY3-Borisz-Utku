

//Basic 1

console.log(Math.max(1, 7, -3, 9));


//Intermediate 1 

let Martin = 76;
let Thomas = 85;
let Klaus = 65;
let Maria = 93;
let David = 81;
let students = [Maria , Martin , David , Klaus , Thomas]
let studentsname = ["Maria" , "Martin" , "David" , "Klaus" , "Thomas"]

function Grades(val, name) {

if (val < 60) {
    console.log(name, 'F')

} else if (val < 70) {
    console.log(name, 'D')
    
} else if (val < 80) {
    console.log(name, 'C')
} else if (val < 90) {
    console.log(name ,'B')
} else if (val < 100) {
    console.log(name, 'A')

}

}
let i = 0;
for(let student of students){
    Grades(student, studentsname[i]);
    i++;

}


//challange 1


let students1 = ['John', 'Jane']
Mathgrades = [70,85]


var avg = sum/elmt.length;

document.write( "The sum of all the elements is: " + sum + " The average is: " + avg );


