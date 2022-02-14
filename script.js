console.log('Add validation!');
let form = document.querySelector('#parking-form')
let totals = document.getElementById('total')
let submit = document.querySelector('#submit-button')
let formIsValid
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let weekDay = ["Mon", "Tue", "Wed", "Thu", "Fri"]
let startDate = document.getElementById("start-date")



let d = Date(startDate.value)
let day = days[d.getDay()]
console.log(day)
function isWeekend(day) {
 if (day.substring(0, 3) === "Sat" || "Sun"){
  return true
 } else {
  return false
 };
let finalTotal = ""
 for (let today of weekDay) {
 if isWeekend(today) {
  let finalTotal += "7+"
  
 } else {
  finalTotal += ""
 }
 }

// };
// let dd = d.getDate()
// whyyyyyy can I not get day to equal days and the value inside of startDate

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