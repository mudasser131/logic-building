
  // array intersection

function findIntersection (arr1,arr2) {
  let  intersection = []

for (let number of arr1){
 
    if (arr2.includes(number)) intersection.push(number)

}
console.log(intersection);


}
const arr1 = [1,2,3,4,5]

const arr2 = [1,2,8,7,5]

findIntersection(arr1,arr2)
