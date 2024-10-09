document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.onMessage.addListener((message) => {
        const otpList = document.getElementById('otpList');
        otpList.innerHTML = '';
        if (message.otpCodes) {
            message.otpCodes.forEach((otp) => {
                let listItem = document.createElement('li');
                listItem.textContent = otp;
                listItem.onclick = () => copyToClipboard(otp);
                otpList.appendChild(listItem);
            });
        }
    });
});

function copyToClipboard(otp) {
    navigator.clipboard.writeText(otp).then(() => {
        alert('Copied OTP: ' + otp);
    });
}
