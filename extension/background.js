chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.otpCodes) {
        let chosenOtp = prioritizeOtp(message.otpCodes);
        if (chosenOtp) {
            copyToClipboard(chosenOtp);
        }
    }
});

function prioritizeOtp(otpCodes) {
    return otpCodes[otpCodes.length - 1]; // Example logic, prioritize the last OTP
}

function copyToClipboard(otp) {
    navigator.clipboard.writeText(otp).then(function() {
        console.log('OTP copied to clipboard: ' + otp);
    }, function(err) {
        console.error('Failed to copy OTP: ', err);
    });
}
