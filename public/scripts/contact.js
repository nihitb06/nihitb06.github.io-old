const SERVICE_ID = "gmail", TEMPLATE_ID = "my_template", USER_ID = "user_kHnyAowmrVXv6mqmriQd1";

$(document).ready(() => {
    emailjs.init(USER_ID);

    document.getElementById('contact-me').addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if(name.value !== '' && email.value !== '' && message.value !== '') {
            try {
                emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#contact-me', USER_ID).then(response => {
                    alert('Message Response: ' + response['text']);
                });
            } catch (e) {
                console.log(e);
            }
        }
    });

    /*$('#submit-button').click((event) => {
        event.preventDefault();
        event.stopPropagation();

        console.log('Hello');

        const name = $('#name'), email = $('#email'), message = $('#message');

        if(name.value !== '' && email.value !== '' && message.value !== '') {
            emailjs.sendForm('gmail', 'my_template', this, USER_ID).then();

            console.log(name + ' ' + email + ' ' + message);

            /!*const data = {
                service_id: 'gmail',
                template_id: 'my_template',
                user_id: USER_ID,
                template_params: {
                    "reply_to": email.value,
                    "from_name": name.value,
                    "to_name":"Nihit Bansal",
                    "message_html": message.value
                }
            };*!/

            /!*$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
            }).done(function() {
                alert('Your mail is sent!');

                name.value = email.value = message.value = '';
                name.set('');
                email.set('');
                message.set('');
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
            });

            return false;*!/
        }
    });*/
});