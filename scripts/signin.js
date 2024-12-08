document.addEventListener('DOMContentLoaded', () => {
    // Get references to buttons and forms
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Event listener for the Sign-Up button
    signupBtn.addEventListener('click', () => {
        // Show the Sign-Up form and hide the Log-In form
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Event listener for the Log-In button
    loginBtn.addEventListener('click', () => {
        // Show the Log-In form and hide the Sign-Up form
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    // Handle Sign-Up Form Submission
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;

        try {
            // Send data to the backend
            const response = await fetch('http://localhost:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, phone_number: phone }),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message || 'Sign-Up Successful!');
            } else {
                const error = await response.text();
                alert(error || 'Error during sign-up.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while signing up.');
        }
    });

    // Handle Log-In Form Submission
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            // Send data to the backend
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message || 'Log-In Successful!');
            } else {
                const error = await response.text();
                alert(error || 'Error during log-in.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    });


});
