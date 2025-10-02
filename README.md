# MuscleUp!

**MuscleUp!** is a responsive and dynamic web application designed to help you craft the perfect workout plan depending on which muscle group you want to focus on.
The app combines an interactive muscle map, animated UI elements, and a simple Spring Boot backend serving exercises from a CSV file.

## Features:
  - Animated & interactive Muscle Map - select muscle groups and get tailored exercises.

    
  - Navigation Bar with Profile, Home and About section, to help you navigate around the app.
    
    ![navigation-gif](https://github.com/user-attachments/assets/1a6e6399-cc12-48c8-afce-7164867ffa67)

  - Footer with hints section - training is cool and all, but did you know...
    
    ![hint-gif](https://github.com/user-attachments/assets/b431929f-ead1-40be-86d5-4fbd5eda9617)

  - Animated background for a more dynamic user experience.
    
    ![background-gif](https://github.com/user-attachments/assets/0828f8e1-22f5-41c8-a738-3528ef9a0f08)

  - Profile section (Try username: admin, password: admin).
    
    ![login-gif](https://github.com/user-attachments/assets/779fdba5-16f2-485c-a141-2a84a5663085)

  - About section, where you can learn more about our application.
    
    ![about-gif](https://github.com/user-attachments/assets/63aa13e1-3945-4a5c-8136-b3f8a9bc5326)


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
