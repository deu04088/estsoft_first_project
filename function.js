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


const textarea = document.getElementById("insert_comment");
const submitBtn = document.getElementById("submit_comment");
const recordComment = document.getElementById("record_comment");

submitBtn.addEventListener('click', function () {
    const comment = textarea.value.trim();

    if (comment) {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment_item';
        commentItem.innerHTML = `
            <div class="comment_profile">
                <img src="./icon/user-regular-full.svg" alt="프로필 사진">
            </div>
            <div class="comment_text">
                <p>${comment}</p>
            </div>
        `;

        recordComment.prepend(commentItem);
        textarea.value = '';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    textarea.addEventListener('keydown', function() {
        if(event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const comment = textarea.value.trim();

            if (comment) {
                const commentItem = document.createElement('div');
                commentItem.className = 'comment_item';
                commentItem.innerHTML = `
                    <div class="comment_profile">
                        <img src="./icon/user-regular-full.svg" alt="프로필 사진">
                    </div>
                    <div class="comment_text">
                        <p>${comment}</p>
                    </div>
                `;

                recordComment.prepend(commentItem);
                textarea.value = '';
            }
        }
    });
});

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
//



