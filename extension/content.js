document.addEventListener('DOMContentLoaded', function() {
    const otpRegex = /\b\d{4,8}\b/g;
    let emailBody = document.querySelector('div[role="listitem"], div[role="presentation"]');
    if (emailBody) {
        let otpMatches = emailBody.textContent.match(otpRegex);
        if (otpMatches && otpMatches.length) {
            chrome.runtime.sendMessage({ otpCodes: otpMatches });
        }
    }
});
