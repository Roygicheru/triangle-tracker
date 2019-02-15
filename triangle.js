function findResult() {
  var a = prompt("Enter sideA");
  var b = prompt("sideB");
  var c = prompt("sideC");

if( sideA === sideB && sideA === sideC && sideB === sideC){
  alert("It is an equilateral triangle ");
}

 else if(sideA === sideB || sideA === sideC || sideB === sideC){
  alert("It is an isosceles triangle ");
}

else if((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB + sideC) <= sideB){
  alert("It is not a triangle ");
}

else {
  alert("It is an scalene triangle");
}
}
