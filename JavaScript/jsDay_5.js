// print all the prime numbers b/w 1 and 100

for(let i = 2; i<= 100 ; i++){
   let isprime = true;
   for(let j =2; j*j <= i; j++){
    if(i%j === 0){
        isprime = false;
        break;
    }
   }
   if(isprime === true){
    console.log(i);
   }
}
//program using nested loop to print nultiplication table using nested
//loop  from 2 to 5;
for(let i = 2; i<= 5; i++){
    for(let j = 1; j<= 10; j++){
        console.log(i+"*"+j+"="+i*j);
    }
}
// write a program to process the following on the array
//sum of +ve, -ve,0 
let arr = [1,2,3,4,0,9,8];
let pos = 0;
let neg = 0;
let zero = 0;
for(let i = 0; i< arr.length; i++ ){
  if(arr[i] === 0){
     zero++;
  }else if(arr[i] > 0){
     pos++;
  }else{
    neg++;
  }
}
console.log(`pos:${pos},neg:${neg},zero:${zero}`);
// sum even digits and odd digits separately 
let nums = [5,8,7,3,4,6,2];
let n = 0;
let se = 0;
let so = 0;
while(n < nums.length){
   if((nums[n] & 1)== 0){
    se = se+nums[n];
   }else{
    so = so+nums[n];
   }
   n++;
}
console.log(`sum even:${se},sum odd:${so}`);
//check whether 12321 is palindrome or not 
let num1 = 12321;
let ans = num1;
let result = 0;
while( num1 > 0){
   let ans = num1% 10;
   result = result* 10 +  ans;
   num1 = Math.floor(num1/10);
}

 console.log(`ans is :${result=== ans?true:false}`);
 // Print the sequence 5, 10, 15, 20, ... 100 using a do...while loop
let i = 5;
let sum = 0;

do {
    console.log(i);
    sum += i;
    i += 5;
} while (i <= 100);

console.log(`Sum: ${sum}`);
// program using switch to calculate electricity bill
//domestic = ₹25/unit
// comercial = ₹8/unit
// industrial = ₹10/unit
// Program using switch to calculate electricity bill
let category = "domestic"; // Try "domestic", "commercial", or "industrial"
let units = 100;
let bill = 0;

switch (category) {
    case "domestic":
        bill = units * 25;
        console.log(`Domestic Bill: ₹${bill}`);
        break;
    case "commercial":
        bill = units * 8;
        console.log(`Commercial Bill: ₹${bill}`);
        break;
    case "industrial":
        bill = units * 10;
        console.log(`Industrial Bill: ₹${bill}`);
        break;
    default:
        console.log("Invalid category");
}
// input javascript using prompt method;
let a = prompt("enter");

for (let s = 0; s < a.length; s++) {
    document.write(a.charAt(s) + "<br>");
}