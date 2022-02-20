console.log('Add validation!');
let form = document.querySelector('#parking-form')
let totals = document.getElementById('total')
let submit = document.querySelector('#submit-button')
let formIsValid
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let weekDay = ["Mon", "Tue", "Wed", "Thu", "Fri"]
let startDate = document.getElementById("start-date")


// validation for date parking not to be allowed to reserve for days in past
let today = new Date()

let dd = today.getDate()
let mm = today.getMonth() + 1
let yyyy = today.getFullYear()
if (dd > 31) {
    showMessage("day must be less than 31")
}
if (dd < 0) {
 showMessage("day must be greater than 0")
}
if (mm < 11) {
    mm = '0' + mm
}

todayDate = yyyy + '-' + mm + '-' + dd
// startDate.value = todayDate
startDate.min = todayDate

// for loop needs to go around the number of days for however many of days they are parking. for loop needs to push onto the array that will then check to see if it is a weekend or weekday and then it will add 5 or 7 to the sum
let d = Date(startDate.value)
let day = days[d.getDay()]
console.log(day)
function isWeekend(day) {
 if (day.substring(0, 3) === "Sat" || "Sun"){
  return true
 } else {
  return false
}}
let i = 0
while (i < day) {
  i++;
  
}

//  for (let today of weekDay) {
//  if isWeekend(today) {
//   let finalTotal += "7"
  
//  } else {
//   finalTotal += "5"
//  }
//  }

// };
// let dd = d.getDate()


form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateForm()
  formIsValid = true
});
function validateForm() {
    removeMessage()
    // validateExp()
    if (formIsValid) {
    showMessage('Success, parking is paid for!')
    }
}



  
  submit.addEventListener('click', (e) => {
  let numOfDay = document.querySelector('#days')
  let numOfDays = numOfDay.value * 5;
  totals.innerText = "Total amount: $" + numOfDays
  });
  // if (weekDay.includes(day)) {
   
  // } else {
  //  let weekendPrice = numOfDay.value * 7;
  //  totals.innerText = "Total amount: $" + weekendPrice 
  // }

let msgDiv = document.querySelector('#msg')
function removeMessage() {
if (msgDiv) {
  msgDiv.innerHTML = ''
  formIsValid = true
}
};

function showMessage(message) {
  msgDiv.innerHTML = `<div class="notification">${message}</div>`
};