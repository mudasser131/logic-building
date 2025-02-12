// find the common msg

const messages = [
    "Hello", "Hello", "World", "World", "Success", "Success", 
    "Believe", "Believe", "Achieve", "Achieve", "Grow", "Grow"
  ];

function repeatedMsgs (messages, keyword) {
let results = []
 for (let message of messages){
if (message.toLowerCase().includes(keyword.toLowerCase())){
results.push(message)

}

 }
 return results


}
 console.log(repeatedMsgs(messages, "Hello"));
 
