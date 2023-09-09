function sendToWhatsapp() {
    let number = "+918219282192";
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text="
        + "Name : " + name + "%0a"
        + "Email : " + email + "%0a"
        + "Message : " + message + "%0a%0a"
        + "From : " + "Arpan's Website";

    window.open(url, '_blank').focus();

}
