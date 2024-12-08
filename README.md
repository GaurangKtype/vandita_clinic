# Vandita's Clinic Website

Vandita's Clinic is a healthcare platform designed to provide personalized care and AI-powered health monitoring solutions. This repository contains the frontend and backend code for the website, aimed at offering seamless patient registration, appointment booking, and login functionalities.

---

## Features

### Frontend
- **Home Page**: A welcoming interface with a hero section highlighting key features of the clinic.
- **Services Page**: A detailed list of healthcare services offered.
- **Sign-Up and Log-In**: Allows patients to create accounts and access their health profiles securely.
- **Responsive Design**: Optimized for desktop and mobile devices.

### Backend
- **User Authentication**: Secure Sign-Up and Log-In functionality using hashed passwords.
- **Database Integration**: Stores user information, including name, email, phone number, and passwords.
- **API Endpoints**:
  - `POST /signin`: For user registration.
  - `POST /login`: For user authentication.
- **Error Handling**: Provides clear error messages for invalid inputs or server issues.

---

## Technologies Used

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript**

### Backend
- **Node.js** with Express.js
- **MySQL** for database management
- **bcrypt** for secure password hashing

---

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MySQL](https://www.mysql.com/) installed and running
- A GitHub account

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/vandita-clinic.git
   cd vandita-clinic
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up the Database**:
   - Create a MySQL database named `users_db`.
   - Run the following SQL script to create the `users` table:
     ```sql
     CREATE TABLE users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL,
         phone_number VARCHAR(20) NOT NULL
     );
     ```

4. **Configure Database in `server.js`**:
   - Update the MySQL credentials in the following section of `server.js`:
     ```javascript
     const db = mysql.createConnection({
         host: 'localhost',
         user: 'your-username',
         password: 'your-password',
         database: 'users_db'
     });
     ```

5. **Start the Backend Server**:
   ```bash
   node server.js
   ```
   - The server will run on `http://localhost:3000`.

6. **Host the Frontend**:
   - Use GitHub Pages or a similar service to host the `index.html` file and other frontend assets.

---

## Usage

1. Visit the hosted frontend URL.
2. Use the **Sign-Up** feature to register as a user.
3. Log in using your credentials to access additional features.

---

## Future Enhancements
- AI integration for health monitoring and analytics.
- Appointment scheduling and reminders.
- E-prescriptions and telemedicine support.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.
