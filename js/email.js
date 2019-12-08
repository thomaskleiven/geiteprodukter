import * as email from 'emailjs-com';

document.getElementById("sendMail").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !address || !message) return; 

    email.init('user_F6fLZcJlH0SR10L1co4pm');
    const mailParams = {
      from_name: name,
      email: address,
      subject: 'Ny bestilling fra: ' + name,
      message_html: message
    }

    email.send('gmail', 'template_Ciwq1uFb', mailParams, 'user_F6fLZcJlH0SR10L1co4pm')
      .then(res => {
        document.getElementById('popUpMessage').click();
      })
      .catch(e => console.log(e));
});

document.getElementById("small").addEventListener("change", function(e) {
    if (e.isTrigger)
    {
        alert ('not a human');
    } else {
        alert ('human');
        document.getElementById("sendMail").disabled = false;
        document.getElementById("sendMail").innerText = 'Send oss en mail med din bestilling';
    }
})
