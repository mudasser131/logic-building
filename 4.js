// finding papa


const pAtParty = [
{name : "raju" , isPapa: false},
{name : "raj" , isPapa: false},
{name : "ravi" , isPapa: false},

{name : "papa" , isPapa: true}
]
function findPapa() {
for (let index = 0; index < pAtParty.length; index++){
    const person = pAtParty [index]

if (person.isPapa){
console.log("papa found");
}
else{
console.log("papa not found");


}
}


}

console.log(findPapa());
