const registerForm = document.getElementById("registrationForm");
const nameInput = document.getElementsByClassName("input-name")[0];
const emailInput = document.getElementsByClassName("input-email")[0];
const passwordInput = document.getElementsByClassName("input-password")[0];
const submitUserDetails = document.getElementById("userDetails");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameValue = nameInput.value;
    let emailValue = emailInput.value;
    let passValue = passwordInput.value;

    var allFormData = {
        nameValue: nameValue,
        emailValue: emailValue,
        passValue: passValue,
    }

    // console.log(allFormData);

    submitUserDetails.innerHTML += `
    <p> Name :- ${allFormData.nameValue}</p>
    <p> Email :- ${allFormData.emailValue}</p>
    <p> Password :- ${allFormData.passValue}</p>
    <hr />
`

    registerForm.reset();
});


// const addUser = () => {
//     submitUserDetails.innerHTML += `
//         <h2>${allFormData.nameValue}</h2>
//         <p>${allFormData.emailValue}</p>
//         <p>${allFormData.passValue}</p>
//     `
// }
