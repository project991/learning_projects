var nameError = document.getElementById('name-error');
var phoneeError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');

function validateName(){
    var name = document.getElementById('contactname').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    } 
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone(){
      var phone = document.getElementById('contactphone').value;

      if(phone.length == 0){
        phoneeError.innerHTML = 'Phone # is required';
        return false;
      }

      if(phone.length !== 11){
        phoneeError.innerHTML = 'Number must be 11 digits';
        return false;
      }

      if(!phone.match(/^[0-9]{11}$/)){
        phoneeError.innerHTML = 'Only digits';
        return false;
      }

      phoneeError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;
}

function validateEmail(){
      var email = document.getElementById('contactemail').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;
}

function validateMessage(){
   var message = document.getElementById('contactmessage').value;
   var required = 30;
   var left = required - message.length;

   if(left > 0){
    messageError.innerHTML = left + 'More characters required';
    return false;
   }
 
   messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;

}