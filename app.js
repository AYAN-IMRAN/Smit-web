$(document).ready(function() {
    window.addEventListener('dfMessengerLoaded', function (event) {
        const dfMessenger = document.querySelector('df-messenger');
        const style = document.createElement('style');
        const nonMobileMinWidth = 501; // Breakpoint where DF Messenger switches between mobile/non-mobile styles
        style.textContent = `
            @media screen and (min-width: ${nonMobileMinWidth}px) {
                .chat-wrapper {
                    height: 440px !important; /* Set your desired height */
                    width: 300px !important; /* Set your desired width */
                }
            }
        `;
        dfMessenger.shadowRoot.querySelector('df-messenger-chat').shadowRoot.appendChild(style);
        // Other customizations can be added here
    });
});