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
  