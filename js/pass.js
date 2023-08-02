function checkPassword() {
    var password = document.getElementById("password").value;
    var strength = document.getElementById("strength");
  
    
    var message = "Password is too weak";
  
    
    var natty = {
      "lowercase": /[a-z]/,
      "uppercase": /[A-Z]/,
      "digits": /[0-9]/,
      "special": /[!@#$%^&*()_+\-={};':"|,.<>?]/,
      "length": /.{8},/
    };
  
    if(password.length>=8){
    if (natty.lowercase.test(password) && 
        natty.uppercase.test(password) && 
        natty.digits.test(password) && 
        natty.special.test(password) && 
        natty.length.test(password)) {
      message = "Password is very strong";
    } else if (natty.lowercase.test(password) && 
               natty.uppercase.test(password) && 
               natty.digits.test(password) && 
               natty.length.test(password)) {
      message = "Password is strong";
    } else if (natty.lowercase.test(password) && 
               natty.digits.test(password) && 
               natty.length.test(password)) {
      message = "Password is medium strength";
    }}
    else{
      message="the password length must be greater than seven"
    }
  
  
       document.getElementById("strength").innerHTML = message;
    

  }
  