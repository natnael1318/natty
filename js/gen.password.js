function checkPasswordStrength() {
    var passwordInput = document.getElementById("password");
    var passwordStrength = document.querySelector(".password-strength");
    var password = passwordInput.value;
    var weak = passwordStrength.querySelector(".weak");
    var medium = passwordStrength.querySelector(".medium");
    var strong = passwordStrength.querySelector(".strong");
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (passwordRegex.test(password)) {
      weak.style.backgroundColor = "";
      medium.style.backgroundColor = "";
      strong.style.backgroundColor = "green";
      passwordStrength.style.color = "green";
      passwordStrength.innerHTML = "Strong";
    } else if (password.length >= 6 && password.length < 8) {
      weak.style.backgroundColor = "orange";
      medium.style.backgroundColor = "";
      strong.style.backgroundColor = "";
      passwordStrength.style.color = "orange";
      passwordStrength.innerHTML = "Medium";
    } else if (password.length >= 1 && password.length < 6) {
      weak.style.backgroundColor = "red";
      medium.style.backgroundColor = "";
      strong.style.backgroundColor = "";
      passwordStrength.style.color = "red";
      passwordStrength.innerHTML = "Weak";
    } else {
      weak.style.backgroundColor = "";
      medium.style.backgroundColor = "";
      strong.style.backgroundColor = "";
      passwordStrength.style.color = "";
      passwordStrength.innerHTML = "";
    }
  }
  function generatePassword() {
    var newPasswordInput = document.getElementById("new-password");
    var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    var passwordLength = 12;
    var newPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      newPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    newPasswordInput.value = newPassword;
  }