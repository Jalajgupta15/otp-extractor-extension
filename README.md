
# OTP Extractor Chrome Extension

**OTP Extractor** is a smart Chrome extension designed to automatically detect One-Time Passwords (OTPs) in Gmail and Outlook emails. It quickly and efficiently captures the correct OTP, copying it directly to your clipboard to save you the hassle of searching for it manually.

## Features

- **Automatic OTP Detection**: Detects OTPs in your Gmail and Outlook emails.
- **Clipboard Copy**: Copies the most relevant OTP directly to your clipboard.
- **Multiple OTP Handling**: In case multiple OTPs are present, you can manually select the correct one.
- **Efficient Performance**: Works quickly and accurately to identify the correct OTP.

## How It Works

1. Install the extension from the Chrome Web Store or load it as an unpacked extension.
2. When you open an email that contains an OTP, the extension automatically detects and copies the OTP to your clipboard.
3. If the email contains multiple similar codes, the extension allows you to manually select the right OTP.

## Installation

### From the Chrome Web Store:
1. Navigate to the **[OTP Extractor Chrome Web Store page](#)** (Replace `#` with the actual link once hosted).
2. Click **"Add to Chrome"** and confirm the installation.

### Manually Load as an Unpacked Extension:
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** by toggling the switch in the top right corner.
4. Click **"Load unpacked"** and select the folder containing the extension files.
5. The extension is now installed and will appear in your Chrome toolbar.

## Usage

1. Open any email in Gmail or Outlook that contains an OTP.
2. The extension will detect the OTP and automatically copy it to your clipboard.
3. If the email contains multiple OTPs, click the extension icon to manually select the correct OTP from a list.

## Screenshots

| **Feature**                      | **Screenshot**                                      |
| --------------------------------- | --------------------------------------------------- |
| OTP Detection in Gmail            | ![Gmail OTP Detection](docs/images/otp_gmail.png)   |
| OTP Detection in Outlook          | ![Outlook OTP Detection](docs/images/otp_outlook.png) |
| Manual Selection for Multiple OTPs | ![Multiple OTPs](docs/images/multiple_otps.png) |

## Contributing

Contributions are welcome! If you’d like to improve this extension, feel free to:
1. Fork this repository.
2. Make your changes.
3. Submit a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
