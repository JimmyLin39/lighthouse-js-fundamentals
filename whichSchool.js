function whichSchool(age){
  if (age < 13) { //elementary school if age below 13
    return "Elementary School";
  } else if (age <= 18 && age >= 13){ // Secondary school if age 13-18
    return "Secondary School";
  }else{ // rest age go to Lighthouse Labs
    return "Lighthouse Labs";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));