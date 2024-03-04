
// Read More and read less button function
function readfunc2() {
    let john2 = document.getElementById('para2');
    if (john2.style.display == 'block') {
        john2.style.display = 'none'
    } else {
        john2.style.display = 'block'
    }
    let text2 = document.getElementById('readmore2');
    console.log(text2.innerText)
    if (text2.innerText == 'Read more') {
        text2.innerText = 'Read less';
    } else {
        text2.innerText = 'Read more';
    }
}
//End of Read More and read less button function


// Hover Effect Function
function hoverEffect(element) {
    element.style.color = "white";
    element.style.backgroundColor = "rgb(1,156,1)";
    element.style.border = "2px solid rgb(1,156,1)";
}
//End of Hover Effect Function


// Normal Effect function
function normalEffect(element) {
    element.style.color = "black";
    element.style.backgroundColor = "transparent";
    element.style.border = "1px solid black";
}
//End of Normal Effect function

let recipient;

// Show Modal by clicking button
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget
        recipient = button.getAttribute('data-bs-whatever')
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = `Send message to ${recipient}`
        modalBodyInput.value = recipient
    })
}

//End of Show Modal by clicking button


// Validation Model input fields and buttons
const emailInput = document.getElementById('exampleInputEmail1');
const messageInput = document.getElementById('message-text');

// Function to validate email address using regular expression
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

//function for cancle button and cancle icon in model
function cancleBtn() {
    emailInput.value = '';
    messageInput.value = '';
    emailInput.style.border = "";
    messageInput.style.border = "";
    emailInput.classList.remove('is-valid', 'is-invalid');
    messageInput.classList.remove('is-valid', 'is-invalid');
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => tooltip.remove());
}

// Add event listener to the Send message button
const sendButton = document.getElementById('send-message-btn');
// console.log(sendButton);
sendButton.addEventListener('click', handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();


    const emailInput = document.getElementById('exampleInputEmail1');
    const messageInput = document.getElementById('message-text');

    //function to handle Email validation
    function handleEmailValidation() {
        if (validateEmail(emailInput.value)) {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            emailInput.style.border = '';
        } else {
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
        }
    }

    //function to handle Message validation
    function handleMessageValidation() {
        if (messageInput.value.trim() !== '') {
            messageInput.classList.remove('is-invalid');
            messageInput.classList.add('is-valid');
            messageInput.style.border = '';
        } else {
            messageInput.classList.remove('is-valid');
            messageInput.classList.add('is-invalid');
        }
    }

    //addEventListener to email and message fields
    emailInput.addEventListener('input', handleEmailValidation);
    messageInput.addEventListener('input', handleMessageValidation);

    // validation of email and message fields using if-else
    if (messageInput.value.trim() === '' && emailInput.value.trim() === '') {
        alert('Enter below details! fields cannot be empty');
        messageInput.focus();
        emailInput.focus();
        emailInput.style.border = "1px solid red"
        messageInput.style.border = "1px solid red"
        return;
    }

    else if (messageInput.value.trim() === '' && emailInput.value.trim() != '') {
        alert('Message field cannot be empty');
        messageInput.focus();
        emailInput.style.border = ""
        messageInput.style.border = "1px solid red"
        return;
    }

    else if (messageInput.value.trim() != '' && emailInput.value.trim() === '') {
        alert('Email field cannot be empty');
        emailInput.focus();
        messageInput.style.border = "";
        emailInput.style.border = "1px solid red"
        return;
    }

    else if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }
    else {


        // Create an object to hold the form data
        const restaurantForm = {
            email: emailInput.value,
            message: messageInput.value
        };

        // Store the form data in local storage as a JSON string
        localStorage.setItem('restaurantForm', JSON.stringify(restaurantForm));

        alert('Thank you! Now you can send mail through your mail client.');
        emailInput.value = '';
        messageInput.value = '';
        emailInput.style.border = "";
        messageInput.style.border = "";
        emailInput.classList.remove('is-valid', 'is-invalid');
        messageInput.classList.remove('is-valid', 'is-invalid');
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => tooltip.remove());
    }

    // Close the modal
    const exampleModal = document.getElementById('exampleModal');
    const modal = bootstrap.Modal.getInstance(exampleModal);
    modal.hide();



    // // Retrieve the message content from local storage
    // const storedFormData = localStorage.getItem('restaurantForm');
    // if (storedFormData) {
    //     const parsedFormData = JSON.parse(storedFormData);
    //     const storedMessage = parsedFormData.message;

    //     // Ensure that the stored message is not empty
    //     if (storedMessage.trim() !== '') {
    //         // Do not encode the message content
    //         const messageContent = storedMessage;

    //         // Retrieve recipient email address
    //         const recipientEmail = 'pizzahut@gmail.com';

    //         // Construct mailto link with pre-filled fields
    //         const subject = encodeURIComponent(`New Message for ${recipient}`);
    //         const body = encodeURIComponent(`Message: ${messageContent}`);
    //         const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    //         // Open user's email client with pre-filled fields
    //         window.location.href = mailtoLink;
    //     } else {
    //         alert('Stored message is empty. Cannot proceed.');
    //     }
    // } else {
    //     alert('No stored form data found.');
    // }




    // Retrieve the message content from local storage
    const storedFormData = localStorage.getItem('restaurantForm');
    if (storedFormData) {
        const parsedFormData = JSON.parse(storedFormData);
        const storedMessage = parsedFormData.message;

        // Ensure that the stored message is not empty
        if (storedMessage.trim() !== '') {
            // Do not encode the message content
            const messageContent = storedMessage;


            // Define a mapping object for recipient names and emails
            const recipientEmails = {
                "Burger king": 'burgerking@gmail.com',
                "McDonald's": 'mcdonalds@gmail.com',
                "Domino's": 'dominos@gmail.com',
                "Pizza-Hut": 'pizzahut@gmail.com',
                "Save the Children": 'stc@gmail.com',
                "International Rescue Committee": 'irc@gmail.com',
                "Care International": 'careinternational@gmail.com',
                "directrelief": 'DirectRelief@gmail.com',
            };

            
            console.log("Recipient name:", recipient);
            console.log("Recipient emails:", recipientEmails);

            // Retrieve recipient email based on recipient name from to the card
            const recipientEmail = recipientEmails[recipient];

            if (recipientEmail) {
                const subject = encodeURIComponent(`New Message for ${recipient} from Ref. of Rescue Kitchen`);
                const body = encodeURIComponent(`${messageContent}`);
                const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

                // Open user's email client with pre-filled fields
                window.location.href = mailtoLink;
            } else {
                alert('Recipient email not found. Sorry for inconvenience.');
            }
        } else {
            alert('Stored message is empty. Sorry for inconvenience.');
        }
    } else {
        alert('No stored form data found.');
    }



}

//End of Validation Model input fields and buttons