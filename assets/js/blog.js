const backButton = document.querySelector('#backButton')
backButton.addEventListener('click', function(){
    window.location.href = "./index.html"
});

// we need to make a function the retrieves all the saved blog posts
// we need to add consts for all the elements we will be adding
// we need to make the page put the blog posts and the elements together when the page loads and display them

const main = document.querySelector('main');


const getBlogPosts = function() {
    const tempBlogPosts = localStorage.getItem('blogs');
    blogs = JSON.parse(tempBlogPosts);
    console.log(blogs);
}

getBlogPosts();

const appendBlogPosts = function() {
    for (let index = (blogs.length-1); index < blogs.length ; index--) {
        const element = blogs[index];
        const newDiv = document.createElement('div')
        const newUser = document.createElement('h4')
        const newTitle = document.createElement('h2');
        const newContent = document.createElement('p');
        newTitle.textContent = `Title: ${element.title}`;
        newTitle.classList.add('blogh2')
        newUser.textContent = `User: ${element.username}`;
        newUser.classList.add('blogh4')
        newContent.textContent = element.content;
        newContent.classList.add('blogp')
        newDiv.classList.add('blogCard')
        main.appendChild(newDiv)
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newContent);
        newDiv.appendChild(newUser);
    }
}        

appendBlogPosts();
