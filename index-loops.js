let a = 0

while (a <= 100) {
    a++;
  if (!(a % 2)) {
    console.log(a); 
  }
}
console.log("");

let b = 103

while (b >= 3) {
    b-=3;
    console.log(b);
}
console.log("");

for (var i = 1; i <= 100; i+=2) {
    console.log(i);
 }
 console.log("");


 for (var d = 0; d <= 100; d++) {
     if (!(d % 3)) {
         console.log("Hello");  
     } 

     if (!(d % 5)) {
         console.log("World");
     }

     if (!(d % 3) && !(d % 5)) {
         console.log("Hello World");
     }
    } 