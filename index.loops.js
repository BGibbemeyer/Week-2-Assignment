let a = 0

while (a <= 100) {
    a++;
  if (!(a % 2)) {
    console.log(a); 
  }
}

let b = 100

while (b >= 0) {
    b-=3;
    console.log(b);
}

for (var i = 1; i <= 100; i+=2) {
    console.log(i);
 }

 for (var d = 0; d <= 100; d++) {
     if (!(d % 3)) {
         console.log("Hello");  
     } 

     if (!(d % 5)) {
         console.log("World");
     }

     if (!(d % 3) && !(d % 5)) {
         console.log("Hello World");~
     }
 }