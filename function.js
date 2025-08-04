const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('sidebar_toggle');
const side_backdrop = document.querySelector('.side_backdrop');

const search = document.querySelector('.search');
const focusSearch = document.getElementById('search');

const userOption = document.querySelector('.user_option');
const userBtn = document.getElementById('user_info');
const user_backdrop = document.querySelector('.user_backdrop');

const textarea = document.getElementById("insert_comment");
const submitBtn = document.getElementById("submit_comment");
const recordComment = document.getElementById("record_comment");

const likeBtn = document.getElementById('like');
const likeIcon = document.getElementById('likeicon');
const dislikeBtn = document.getElementById('dislike');
const dislikeIcon = document.getElementById('dislikeicon');
const count = document.getElementById("count");

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

/*===========================like&dislike button===========================*/

let likeActive = false;
let dislikeActive = false;
let tmp = 0;

function updateTotalCount() {
    const current = parseInt(count.textContent) || 0;
    count.textContent =  current + tmp;
    tmp = 0;
}

let current = parseInt(count.textContent) || 0;

likeBtn.addEventListener("click", () => {
    if (!likeActive) {
        likeActive = true;
        likeIcon.src = "icon/hand-thumbs-up-fill.svg";
        if(dislikeActive) {
            dislikeActive = false;
            dislikeIcon.src = "icon/hand-thumbs-down.svg";
        }
        tmp++;
        updateTotalCount();
    } else {
        likeActive = false;
        likeIcon.src = "icon/hand-thumbs-up.svg";
        tmp--;
        updateTotalCount();
    }
});

dislikeBtn.addEventListener("click", () => {
    if (!dislikeActive) {
        dislikeActive = true;
        dislikeIcon.src = "icon/hand-thumbs-down-fill.svg";
        if(likeActive) {
            likeActive = false;
            likeIcon.src = "icon/hand-thumbs-up.svg";
        }
        tmp--;
        updateTotalCount();
    } else {
        dislikeActive = false;
        dislikeIcon.src = "icon/hand-thumbs-down.svg";
        tmp++;
        updateTotalCount();
    }
});

//count.textContent = current

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



