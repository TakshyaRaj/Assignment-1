alert("Welcome To The Webpage");

//Rectangle
let length_r = prompt("What is the length of rectangle");
let width_r = prompt("What is the width of rectangle");
let area_r = (length_r*width_r);
alert(area_r);


// circle
a = confirm("Do want to calculate area else perimeter");
if (a == true) {
  let radius = prompt("What is the radius of circle");
  let area_c = (22/7*radius*radius);
  alert(`Area of circle is ${area_c}`);
}

else{
  let radius = prompt("What is the radius of circle");
  let perimeter_c = (2*22/7*radius);
  alert(`Perimeter is ${perimeter_c}`);}


// check for examination

let age = prompt("enter your age");
switch (age) {
  case 18:
    alert("You can give AAIM");
    break;
  
  case 10:
    alert("You can give MA");
    break;
  
  case 25:
    alert("Tou can give BIA");
    break;
    
  default :
    alert("You can give IMAS")
  
}
