

const submitButton = document.querySelector('#submitButton');
const usernameInput = document.querySelector('#usernameInput');
const titleInput = document.querySelector('#titleInput')
const contentInput = document.querySelector('#contentInput')

const tempUserInput = [usernameInput, titleInput, contentInput];

document.body.addEventListener('click', function(event) {
    const element = event.target
    if (element.matches('#submitButton')) {
        submitForm();
    }
})

const submitForm = function() {
    console.log('woah, nice click')
    if (contentInput.includes(null)) {
        alert("All fields must be filled out before proceeding")
    }
}