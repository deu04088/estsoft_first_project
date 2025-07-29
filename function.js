const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('sidebar_toggle');
const backdrop = document.querySelector('.backdrop');

toggleBtn.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.toggle('open');
    backdrop.classList.toggle('open');
});

backdrop.addEventListener('click', function() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
});

//======================================================================================

const search = document.querySelector('.search');
const focusSearch = document.getElementById('search');

focusSearch.addEventListener('click', function() {
    search.classList.add('focus');
});
document.addEventListener('click', function(event) {
    if(!search.contains(event.target)) {
        search.classList.remove('focus');
    }
});
//
//focusSearch.addEventListener('click', function() {
//    search.classList.remove('focus');
//});