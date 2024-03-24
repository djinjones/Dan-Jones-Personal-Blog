// First thing to do is to set constant variables for the html and css documents
const navButton = document.querySelector('#navButton')
const colorModeButton = document.querySelector('.colorModeButton');
let bigButton = document.querySelector('#bigButton')
const root = document.querySelector(":root");

//------------------------DARK MODE---------------------------
//------------------------DARK MODE---------------------------
//------------------------DARK MODE---------------------------
// We need to add a click funtion that switches the page's color mode✅
// We need to make a few functions to change the css styling from light to dark✅
// we also need to make sure we are checking to see what mode it is currently in✅
// It would also be a good idea to store the currently saved color mode so that when relaoding the page it will change it to whatever the user last had✅

//------------------------CLICK FUNCTION---------------------------

colorModeButton.addEventListener('click', function(){
    changeColorMode();
})
bigButton.addEventListener('click',function(){
changeColorMode();
})

//------------------------COLOR CHANGE FUNCTION---------------------------

const changeColorMode = function() {
    let mode = JSON.parse(localStorage.getItem('mode'));
    if (mode == null) {
        localStorage.setItem('mode', true)
        changeColorMode();
    } else {
    if (mode == true) {
        toDarkMode();
        
    } else if (mode == false) {
        toLightMode();
    }
}}

const toDarkMode = function() {
    localStorage.setItem('mode', false);
        root.style.setProperty('--font1', 'black');
        root.style.setProperty('--background1', 'rgb(10, 14 11)');
        root.style.setProperty('--gradient','linear-gradient(rgb(240, 212, 212), white)');
        colorModeButton.textContent = 'Light mode on 😒 EWW!';
        bigButton.textContent = 'Light mode on 😒 EWW!';
        bigButton.style.setProperty('color', 'black')
        navButton.style.setProperty('color', 'black')
        console.log('dark mode is now off');
}

const toLightMode = function() {
        localStorage.setItem('mode', true);
        root.style.setProperty('--font1', 'rgb(221, 97, 97)');
        root.style.setProperty('--background1', 'black');
        root.style.setProperty('--gradient','linear-gradient( rgb(221, 97, 97), black)');
        navButton.style.setProperty('color', 'white')
        colorModeButton.textContent = 'Change it to Light mode 😒 EWW!';
        bigButton.textContent = 'Change it to Light mode 😒 EWW!';
        bigButton.style.setProperty('color', 'white')
        console.log('dark mode is now on');
}

//------------------------LOCAL STORAGE CHECK FUNCTION---------------------------


const localModeCheck = function() {
    let mode = JSON.parse(localStorage.getItem('mode'));
    console.log(`getting mode from local storage...`);

    if (mode == null) {
        localStorage.setItem('mode', false);
    } else if (mode == true) {
        localStorage.setItem('mode', false);
    } else {
        localStorage.setItem('mode', true);
    }
    changeColorMode();
}

//------------------------INITIALIZATION FUNCTION---------------------------

function init() {
    localModeCheck();
    console.log(localStorage.getItem('mode'))
    
}

init();

//------------------------FORM---------------------------
//------------------------FORM---------------------------
//------------------------FORM---------------------------

