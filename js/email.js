const email = require('emailjs-com');


function run() {

    const name = document.getElementById("name").value;
    const address = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log('mailing')
    if (!name || !address || !message || !document.getElementById('small').checked) {
        document.getElementById('small').checked = false;
        return;
    } 

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
          console.log(res);
          alert('Takk for din bestilling!')
      })
      .catch(e => { 
            console.log(e);
            if (e.status > 0) {
                alert('Noko gjekk galt, prøv igjen eller kontakt oss via Facebook') 
                document.getElementById('small').checked = false;
            } else {
                alert('Takk for din bestilling!')
            }
        });
      }


document.getElementById("small").addEventListener("change", function(e) {
    if (e.isTrigger)
    {
        alert ('not a human');
    } else {

        run();
    }
})
