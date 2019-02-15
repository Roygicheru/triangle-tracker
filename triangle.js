function findResult() {
  var sideA = prompt("Input the value of side A");
  var sideB = prompt("Input the value of side B");
  var sideC = prompt("Input the value of side C");

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
  alert("It is a scalene triangle");
}
}
