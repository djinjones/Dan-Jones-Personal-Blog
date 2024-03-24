
const form = document.querySelector('#blogForm');
const usernameInput = document.querySelector('#usernameInput');
const titleInput = document.querySelector('#titleInput')
const contentInput = document.querySelector('#contentInput')

blogs = JSON.parse(localStorage.getItem('blogs'))
const importSavedBlogs = function() {
    if (blogs == null){
        blogs = []
    }}

importSavedBlogs();

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (usernameInput.value == '' || titleInput.value == '' || contentInput.value == ''){
        alert('All fields must be filled out. Please try again.') 
        return;
    } else {
      const tempUserInput = {
        username: usernameInput.value, 
        title: titleInput.value, 
        content: contentInput.value
        };
        blogs.push(tempUserInput);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        window.location.href = "./blog.html"
        return;
     }
})

