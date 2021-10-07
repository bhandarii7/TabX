
const whatsappBtn = document.getElementById('whatsapp-btn');
const facebookBtn = document.getElementById('facebook-btn');
const twitterBtn = document.getElementById('twitter-btn');
const redditBtn = document.getElementById('reddit-btn');
const telegramBtn = document.getElementById('telegram-btn');


function init()
{
    chrome.tabs.query({active: true,lastFocusedWindow: true}, function(tabs) {
    var tab = tabs[0];
    console.log(tab.url);
    // alert(tab.url);
    //let postUrl = encodeURI(window.location.href) ;
    // console.log(postUrl);
    // console.log(postUrl);
    let postTitle = encodeURI("Check this out.") ;

    twitterBtn.setAttribute("href", `https://twitter.com/share?url=${tab.url}&text=${postTitle}`);

    facebookBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${tab.url}`);

    whatsappBtn.setAttribute("href", `https://web.whatsapp.com/send?text=${postTitle} ${tab.url}`);

    redditBtn.setAttribute("href", `https://reddit.com/submit?url=${tab.url}&title=${postTitle}`);

    telegramBtn.setAttribute("href", `https://t.me/share/url?url=${tab.url}&text=${postTitle}`);
});
}

init();