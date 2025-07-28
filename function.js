const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('sidebar_toggle');

toggleBtn.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.toggle('open');
});

const search = document.querySelector('.search');
const focusSearch = document.getElementById('search');

focusSearch.addEventListener('click', function() {
    search.classList.add('focus');
});
focusSearch.addEventListener('blue', function() {
    search.classList.remove('focus');
});