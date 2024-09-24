const form = document.getElementById('link-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const countryCode = document.getElementById('country-code').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();

    // Remove any '+' symbol from the country code (if present)
    const cleanCountryCode = countryCode.replace(/^\+/, '');

    const whatsappLink = `https://wa.me/${cleanCountryCode}${phoneNumber}`;

    // Create a clickable link element
    const linkElement = document.createElement('a');
    linkElement.href = whatsappLink;
    linkElement.textContent = 'Click here to open WhatsApp';

    resultDiv.innerHTML = ''; // Clear previous content
    resultDiv.appendChild(linkElement);
});