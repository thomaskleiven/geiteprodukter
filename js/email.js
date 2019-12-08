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

    console.log('sending mail')

    email.send('gmail', 'template_Ciwq1uFb', mailParams, 'user_F6fLZcJlH0SR10L1co4pm')
      .then(res => {
          alert('Takk for din bestilling!')
      })
      .catch(e => alert('Noko gjekk galt, prøv igjen eller kontakt oss via Facebook'));
});

document.getElementById("small").addEventListener("change", function(e) {
    if (e.isTrigger)
    {
        alert ('not a human');
    } else {
        document.getElementById("sendMail").disabled = false;
        document.getElementById("sendMail").innerText = 'Send oss en mail med din bestilling';
    }
})
