const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('sidebar_toggle');
const side_backdrop = document.querySelector('.side_backdrop');

const search = document.querySelector('.search');
const focusSearch = document.getElementById('search');

const userOption = document.querySelector('.user_option');
const userBtn = document.getElementById('user_info');
const user_backdrop = document.querySelector('.user_backdrop');


// sidebar function
toggleBtn.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.toggle('open');
    side_backdrop.classList.toggle('open');
});

side_backdrop.addEventListener('click', function() {
    sidebar.classList.remove('open');
    side_backdrop.classList.remove('open');
});

// search focus function
focusSearch.addEventListener('click', function() {
    search.classList.add('focus');
});
document.addEventListener('click', function(event) {
    if(!search.contains(event.target)) {
        search.classList.remove('focus');
    }
});

// user information & option popup
userBtn.addEventListener('click', function(event) {
    event.preventDefault();
    userOption.classList.toggle('open');
    user_backdrop.classList.toggle('open');
});

user_backdrop.addEventListener('click', function() {
    userOption.classList.remove('open');
    user_backdrop.classList.remove('open');
});



