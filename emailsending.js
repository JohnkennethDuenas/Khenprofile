const src="https://smtpjs.com/v3/smtp.js"

function sendEmail(){
    Email.send({
        SecureToken: "2f4f88c1-0d7b-4167-9ccc-0c20b861ee85",
        To : 'johnkennethduenas29@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            +"<br> Email: " + document.getElementById("email").value
            +"<br> Phone: " + document.getElementById("Phone").value
            +"<br> Message: " + document.getElementById("Message").value
    }).then(
        message => alert(message)
    );
}