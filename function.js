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

// button
//document.getElementById('minibar_home_btn').addEventLister('click', function() {
//    location.href = 'main_page.html?videoId=main'
//})






// videoId
//const params = new URLSearchParams(location.search);
//const videoId = params.get("videoId");
//
//if (videoId === "main") {
//    showMainPage();
//} else if (videoId === "subscribe") {
//    showSubscribePage();
//} else if (videoId === "1") {
//    showVideoPage();
//}





//const params = new URLSearchParams(window.location.search);
//params.set('videoId', '1');
//window.location.search = params.toString();







//var http = require('http');
//var url = require('url');
//
//var app = http.createServer(function (request, response) {
//    var queryData = url.parse(request.url, true).query;
//    response.end(queryData.name);
//});
//
//app.listen(4000);





//
//const urlParams = new URL('http://localhost:63342/estsoft_first_project/video_page.html?_ijt=it0hjqj377ld1pnb2h2dhacvov&_ij_reload=RELOAD_ON_SAVE');
//const urlObject = new URL(urlParams);
//
//urlObject.search = '';
//console.log(urlObject.toString());
//
//
//urlObject.searchParams.set("videoId", "1");
//console.log(urlObject)
