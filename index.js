// document.getElementById('messageForm').addEventListener('submit', sendMessage);

// function sendMessage(event) {
//     event.preventDefault(); // Prevent form submission

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     var data = {
//         name: name,
//         email: email,
//         message: message
//     };
//2d0e4f3a1b5c8c7699f104faa79be959
//     fetch('your-server-url', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(function(response) {
//         if (response.ok) {
//             alert('Message sent successfully!');
//             document.getElementById('messageForm').reset();
//         } else {
//             alert('Error sending message.');
//         }
//     })
//     .catch(function(error) {
//         console.log('Error:', error);
//     });
// }