
let test = document.getElementById("test");

let weeks = [
  "Spring 2023",
  "2 season spring 2024",
  "3 Week",
  "4 Week",
  "5 Week",
  "6 Week",
  "7 Week",
];

let count = 0;
if(weeks[count].length > 16){
  test.classList.add("my_animation")
}
test.innerHTML = weeks[count];

const swipingRight = () => {
  if (count < weeks.length - 1) {
    count += 1;
    if(weeks[count].length>16){
      test.classList.add("my_animation")
    }else{
      test.classList.remove("my_animation")
    }
    test.innerHTML = weeks[count];
  } else {
    count = weeks.length-1;
    if(weeks[count].length>16){
      test.classList.add("my_animation")
    }else{
      test.classList.remove("my_animation")
    }
    test.innerHTML = weeks[count];
  }
};

const swipingLeft = () => {
  if (count > 0) {
    count--;
    if(weeks[count].length>16){
      test.classList.add("my_animation")
    }else{
      test.classList.remove("my_animation")
    }
    test.innerHTML = weeks[count];
  } else {
    count = 0;
    if(weeks[count].length>16){
      test.classList.add("my_animation")
    }else{
      test.classList.remove("my_animation")
    }
    test.innerHTML = weeks[count];
  }
};


