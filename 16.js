// Write a function that prints numbers from 1 to n, but:

// If a number is divisible by 3, print "Fizz"
// If a number is divisible by 5, print "Buzz"
// If a number is divisible by both 3 and 5, print "FizzBuzz"
// Otherwise, print the number itself


function FizzBuzz(n){

for(let i=1 ; i<=n ; i++){

if (i%3==0 && i%5==0){

console.log("fizzbuzz");


}
else if (i%3==0 ){

    console.log("fizz");
    
    
    }


    else if (i%5==0 ){

        console.log("buzz");
        
        
        }
        else {

            console.log(i);
            
        }


}


}

FizzBuzz(15)