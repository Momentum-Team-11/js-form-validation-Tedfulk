# Validating a Form

## Directions

Look at `form.html`. It contains a form for pre-paid parking. It includes some styling already done for you in `style.css`.

You will edit this HTML and write JavaScript to validate this form. When the "Make Reservation" button is clicked, you should check the values of each field and make sure they are valid. If not, you have to visually alert the user to that fact. There are two rules in `style.css` that will help you with creating a visual alert: `input-valid` and `input-invalid`. You will need to add the corresponding class names to the div elements surrounding the `input` elements.

<!-- wasn't able to get the red around the parking validation if field wasn't filled out -->

Do this project in steps. Each step adds another layer of difficulty. Make sure and commit your code after each step, if not more often. Do not worry if you cannot complete all the steps!

### Step 1

Make each field required. This should only require changes to the HTML. A message should appear on required fields if they are not filled in when the form is submitted.

### Step 2

Add the following validations:

- Car year must be a number. (Consider changing the `type` of the input field.)
- Car year must be after 1900.
- Number of days must be a number.
- Number of days must be between 1 and 30.

### Step 3

Add another validation: CVV must be a three-digit number. This can use the `pattern` attribute, or custom validation with JavaScript.

### Step 4

Add the ability to show the user the total cost of their parking when they click the "Make Reservation" button. The div with id "total" should be filled with text showing the cost. This should only occur if the form is valid.

<!-- make a click event of make reservation
need to add value of number of days field by * 5 and display in id=total -->

The cost is $5 per day.

### Step 5

The requirements have changed for calculating cost. The new cost is $5 per weekday, and $7 per weekend day. `.map` and `.reduce` will be very helpful in calculating the total cost, as will [the JavaScript Date object](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/).

<!-- Need to define days of the week getDay
need to give values to weekdays $5 and weekends $7
 create an array of the days
 need to figure out how to loop the days-->
 <!-- for loop needs to go around the number of days for however many of days they are parking. for loop needs to push onto the array that will then check to see if it is a weekend or weekday and then it will add 5 or 7 to the sum -->

### Step 6

Validate the format of the credit card number. The following code will let you know if it is valid:

```js
function validateCardNumber(number) {
  var regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(number)) return false;

  return luhnCheck(number);
}

function luhnCheck(val) {
  var sum = 0;
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
}
```

This code only works with 16 digit card numbers. "4111111111111111" is a valid card number you can use for testing purposes.

If the credit card number is invalid, an error message should appear that looks like the rest of the built-in client side validations.

### Step 7

Add the following validations:

- Expiration date must be a valid month and year and in the correct format.
<!-- Need to define this month and year
getMonth = gets month
getFullYear = gets 4 digit year
setDate = set month of the year
setFullYear = set 4 digit year-->
- Expiration date must not be in the past.
<!-- set restriction in JS for date in past-->
- Car year cannot be in the future. They sell 2023 cars in 2022 so add 1 but making that max year. you have to do a JS query of what the current year is. JS has a date tag you'll have to manipulate.

- Date parking must be in the future.

Each of these should also have client side validation errors.
