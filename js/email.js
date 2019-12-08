import * as email from 'emailjs-com';

document.getElementById("sendMail").onclick = function() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !address || !message || !document.getElementById('small').checked) return; 

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
      .catch(e => { 
            if (e.satus > 0) {
                alert('Noko gjekk galt, prøv igjen eller kontakt oss via Facebook') 
            } else {
                alert('Takk for din bestilling!')
            }
        });
};

document.getElementById("small").addEventListener("change", function(e) {
    if (e.isTrigger)
    {
        alert ('not a human');
    } else {
        document.getElementById("sendMail").innerText = 'Send oss en mail med din bestilling';
    }
})
