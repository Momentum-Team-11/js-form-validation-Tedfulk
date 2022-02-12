console.log('Add validation!');
let form = document.querySelector('#parking-form')
let totals = document.getElementById('total')
let submit = document.querySelector('#submit-button')
let formIsValid
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let weekDay = ["Mon", "Tue", "Wed", "Thu", "Fri"]
let startDate = document.getElementById("start-date")
let d = new Date(startDate.value)
let day = days[d.getDay()]
console.log(day)
// whyyyyyy can I not get day to equal days and the value inside of startDate

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // validateTotal()
  formIsValid = true

  
});


if (formIsValid) {

 
 console.log('checkpoint 1')
  };
  
  submit.addEventListener('click', (e) => {
  let numOfDay = document.querySelector('#days')
  let numOfDays = numOfDay.value * 5;
  
  if (weekDay.includes(day)) {
   totals.innerText = "Total amount: $" + numOfDays
   
  } else {
   let weekendPrice = numOfDay.value * 7;
   totals.innerText = "Total amount: $" + weekendPrice 
  }
  
  
  });

console.log('checkpoint 2')



