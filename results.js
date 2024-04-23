
const link = encodeURI(window.location.href);
const message = encodeURIComponent('I am this programming language! Do this quiz and see which one is yours!');
const title = encodeURIComponent(document.querySelector('title').textContent);

const facebook = `https://www.facebook.com/share.php?u=${link}&text=${message}`
const whatsapp = `https://api.whatsapp.com/send?text=${message}: ${link}`
const telegram = `https://telegram.me/share/url?url=${link}&text=${message}`
        
function openFacebook() {
    window.open(facebook, '_blank');
}

function openWhatsApp() {
    window.open(whatsapp, '_blank');
}

function openTelegram() {
    window.open(telegram, '_blank');
}

        
        
