function addSpace(input) {
    let value = input.value.replace(/\s/g, ''); // Remove existing spaces
    let formattedValue = '';
    
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' '; // Insert space after every 4 characters
      }
      formattedValue += value[i];
    }
    
    input.value = formattedValue;
  }

  /* console.log(one,two)
  if(one>=1 && one<=12 && two>=23){
   but.Disabled=false
   console.log(but)
}  */

function check() {
  // Perform your desired actions or validations here
  // You can access the entered values using document.getElementById() and .value
  
  
  var expiryDate1 = document.getElementById("expiryDate1").value;
  var expiryDate2 = document.getElementById("expiryDate2").value;
  if(expiryDate1>=1 && expiryDate1<=12 &&expiryDate2>23 &&expiryDate2<=30){
    console.log("valid")

  }

  // Perform any necessary logic or validation based on the input values
  // For example, you can compare the values or display an error message
}
const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('input');
const submitButton = document.getElementById('submit');
inputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });
  

  function validateForm() {
    let isValid = true;
  

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
      }
    });
  
      submitButton.disabled = !isValid;
  }
  
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    if (form.checkValidity()) {
      console.log('Form submitted successfully!');

    }
  });
  window.onbeforeunload=function(){
    inputs.forEach(input=>{
      input.value=" "
    })
  }
  const opened= ()=>{
    location.href="boots.html" 
}