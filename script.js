// Function to open WhatsApp with pre-filled message
function openWhatsApp() {
    // Replace "YOUR_MESSAGE" with your desired message
    var message = "heyyyy, be my girl???";
    var encodedMessage = encodeURIComponent(message);
  
    // Replace "PHONE_NUMBER" with the phone number including the country code
    var phoneNumber = "+2347049704275";
  
    // Open WhatsApp with pre-filled message
    window.open("https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage);
  }
  
  // Add event listener to the button
  var whatsappButton = document.getElementById("whatsappButton");
  whatsappButton.addEventListener("click", openWhatsApp);
  