<script type="text/javascript">
function validate(){
  var  validationField = document.getElementById('validation-txt');
  var  password= document.getElementById('password-2');

  var content = password.value;
  var  errors = [];
  console.log(content);
  if (content.length < 8) {
    errors.push("Your password must be at least 8 characters"); 
  }
  if (content.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter.");

  }
  if (content.search(/[0-9]/i) < 0) {
    errors.push("Your password must contain at least one digit."); 

  }
  if (errors.length > 0) {
    validationField.innerHTML = errors.join('');

    return false;
  }
    validationField.innerHTML = errors.join('');
    return true;

  }
</script>