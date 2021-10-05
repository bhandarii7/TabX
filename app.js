
const whatsappBtn = document.getElementById('whatsapp-btn');
const facebookBtn = document.getElementById('facebook-btn');
const twitterBtn = document.getElementById('twitter-btn');
const redditBtn = document.getElementById('reddit-btn');
const telegramBtn = document.getElementById('telegram-btn');



function init()
{
    let postUrl = encodeURI(window.location.href) ;
    // console.log(postUrl);
    // console.log(postUrl);
    let postTitle = encodeURI("Check this out.") ;

    twitterBtn.setAttribute("href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);

    facebookBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);

    whatsappBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);

    redditBtn.setAttribute("href", `https://reddit.com/submit?url=${postUrl}&title=${postTitle}`);

    telegramBtn.setAttribute("href", `https://t.me/share/url?url=${postUrl}&text=${postTitle}`);
}

init();