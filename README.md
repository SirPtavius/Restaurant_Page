
Restaurant Page
This project is a single-page application for a restaurant website, developed as part of The Odin Project curriculum. The goal of this project is to practice DOM manipulation by dynamically rendering different sections of the website using JavaScript.
https://sirptavius.github.io/Restaurant_Page/

Features
Home Page: Introduces the restaurant with a welcoming message and a brief description.
Menu Page: Displays a list of the restaurant's dishes, complete with images and descriptions.
About Page: Provides background information about the restaurant, including its history and mission.
Technologies Used
HTML: For the basic structure of the web pages.
CSS: For styling the web pages to make them visually appealing.
JavaScript: For dynamically rendering the content based on user interaction.
Webpack: To bundle JavaScript modules and manage project dependencies.
Project Structure
src/index.js: The entry point of the application. Initializes the page and sets up event listeners for navigation.
src/home.js: Contains the logic to render the Home page.
src/menu.js: Contains the logic to render the Menu page.
src/about.js: Contains the logic to render the About page.
src/initialize.js: Initializes the navigation and sets the initial active page.
src/style.css: Contains the styling for the application.
dist/: The distribution folder containing the bundled output.
Installation and Usage
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/restaurant-page.git
cd restaurant-page
Install dependencies:

sh
Copy code
npm install
Build the project:

sh
Copy code
npx webpack
Open the application:
Open dist/index.html in your browser to view the restaurant page.

Learning Outcomes
Gain experience in manipulating the DOM using JavaScript.
Understand how to set up and use Webpack for module bundling.
Develop a better understanding of the modularity and separation of concerns in web development.
Acknowledgments
This project is part of The Odin Project's JavaScript curriculum. For more details, visit the Restaurant Page project description.
