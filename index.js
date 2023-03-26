document.querySelector(".button").addEventListener("click", function () {
  var isEmailAddressValid = validateEmailAddress();
  if (isEmailAddressValid) {
    document.querySelector(".invalidEmail").style.visibility = "hidden";
    document.querySelector(".errorIcon").style.visibility = "hidden";
  } else {
    document.querySelector(".invalidEmail").style.visibility = "visible";
    document.querySelector(".errorIcon").style.visibility = "visible";
  }
});

function validateEmailAddress() {
  var emailAddress = document.querySelector(".form-text").value;
  if (!emailAddress.includes("")) {
    if (emailAddress.includes("@") && emailAddress.includes(".")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
