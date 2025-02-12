//    find the  max number 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function maxNum (numbers) {
  
maxno = 0
for (i=0;i<numbers.length;i++){
  if(numbers[i] > maxno){

    maxno= numbers[i]
  }

}
return maxno


}

// maxNum(numbers)

console.log(maxNum(numbers));
