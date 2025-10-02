# MuscleUp!

**MuscleUp!** is a responsive and dynamic web application designed to help you craft the perfect workout plan depending on which muscle group you want to focus on.
The app combines an interactive muscle map, animated UI elements, and a simple Spring Boot backend serving exercises from a CSV file.

## Features:
  - Animated & interactive Muscle Map - select muscle groups and get tailored exercises.
  - Navigation Bar with Profile, Home and About section, to help you navigate around the app.
  - Animated background for a more dynamic user experience.
  - Footer with hints section - training is cool and all, but did you know... 
  - Profile section (Try username: admin, password: admin).
  - About section, where you can learn more about our application. 

## Tech stack:
  - **Frontend:** Angular 20, TypeScript, RxJS, HTML5, CSS3,
  - **Backend:** Java 17, Spring Boot, Maven,
  - **Other:** RESTful API integration
  
## Application setup:
1. **Requirements:**
  - Node.js (v18+) and npm,
  - Angular CLI (npm install -g @angular/cli),
  - Java 17+,
  - Maven 3.9+
2. **Clone the repository**
  Run `git clone https://github.com/MichalWawro/Muscle-Up.git` to clone the repository,
3. **Backend setup**
  In the 'server' folder run the command `mvn spring-boot:run`,
4. **Frontend Setup**
  In the 'client' folder run the command `ng serve`,
5. **Try the application yourself**
  If set up correctly, the application you should be able to open the app on http://localhost:4200 in your browser.
