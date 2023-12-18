let phoneNumber = '';

window.onload = function() {
  generateDialButtons();
};

function generateDialButtons() {
  const rotaryPhone = document.getElementById("rotaryPhone");
  for (let i = 0; i <= 9; i++) {
    const dialButton = document.createElement("div");
    dialButton.classList.add("dial");
    dialButton.innerText = i === 10 ? "*" : i === 11 ? "#" : i;
    dialButton.onclick = function() {
      rotateDial(i === 10 ? "*" : i === 11 ? "#" : i);
    };
    rotaryPhone.appendChild(dialButton);
  }
}

function rotateDial(number) {
  phoneNumber += number;
  displayPhoneNumber();
}

function displayPhoneNumber() {
  document.getElementById("phone").innerText = phoneNumber;
}

function submitNumber() {
  alert("Phone number entered: " + phoneNumber);
  resetPhoneNumber();
}

function clearPhoneNumber() {
  phoneNumber = '';
  displayPhoneNumber();
}