"use strict";
//////////////
//selected DOM elements is given below:
const date = document.querySelector(".birthday"); // also can be by id
const submitBtn = document.querySelector(".btn--submit");
const showAge = document.querySelector("#result");
const resultSen = document.getElementById("txt--result");
////////////////
//the age calculator function
const getAge = function (dateAsinput) {
  if (!dateAsinput) {
    alert("Please Enter BirthDate");
  }
  const ipDate = new Date(dateAsinput);
  const birthYear = ipDate.getFullYear();

  const currentYear = new Date().getFullYear();

  return currentYear - birthYear;
};

// event handling
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  ////
  const clientAge = getAge(date.value); // date.value for parsing the date string
  if (clientAge) {
    showAge.textContent = clientAge;

    resultSen.style.display = "block";
  }
  //console.log("So, the current age:", clientAge);
});
