const github = new Github;
const ui = new UI;




const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make HTTP call
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // Show Alert
            } else {
                // Show Profile 
                ui.showProfile(data.profile);


            }
        })
    } else {
        // Clear Profile

    }
});