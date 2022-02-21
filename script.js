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






submit.addEventListener('click', (e) => {
  e.preventDefault()
  let numOfDay = document.querySelector('#days')
  // let numOfDays = numOfDay.value * 5;
  let d = new Date(startDate.value)
  // let day = days[d.getDay()]
  let totally = 0 
  for (let i = 0; i < numOfDay.value; i++) {
    d.setDate(d.getDate() + 1)
    console.log(d.getDay())
    console.log(days[d.getDay()])
    let w = isWeekend(d)
    console.log(w)
    if (w) {
      totally += 7
    } else {
      totally += 5
    }
  }
  totals.innerText = "Total amount: $" + totally
});

// if (weekDay.includes(day)) {
  
  // } else {
    //  let weekendPrice = numOfDay.value * 7;
    //  totals.innerText = "Total amount: $" + weekendPrice 
    // }
    
    let msgDiv = document.querySelector('#msg')
    validateForm()
    function removeMessage() {
      if (msgDiv) {
        msgDiv.innerHTML = ''
        formIsValid = true
      }
    };
    
    function showMessage(message) {
      msgDiv.innerHTML = `<div class="notification">${message}</div>`
    };
    
    
    
    function validateForm() {
      removeMessage()
      // validateExp()
      if (formIsValid) {
        showMessage('Success, parking is paid for!')
      }
    }
    // for loop needs to go around the number of days for however many of days they are parking. for loop needs to push onto the array that will then check to see if it is a weekend or weekday and then it will add 5 or 7 to the sum


  
    function isWeekend(day) {
      let x = day.toDateString().substring(0, 3)
      if (x === "Sat" || x === "Sun"){
        return true
      } else {
        return false
      }}
    //   let i = 0
    //   let count = 0
    //   while (i < day) {
    //     i++;
    //     if (count === "Sat" || "Sun") {
    //       count = count + 7 
    //     }
    //   }




      //  for (let today of weekDay) {
      //  if isWeekend(today) {
      //   let finalTotal += "7"
        
      //  } else {
      //   finalTotal += "5"
      //  }
      //  }
      
      // };
      // let dd = d.getDate()