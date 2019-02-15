function findResult() {
  var sideA = parseInt(prompt("sideA"));
  var sideB = parseInt(prompt("sideB"));
  var sideC = parseInt(prompt("sideC"));

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
