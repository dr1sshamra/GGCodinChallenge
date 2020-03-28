# GGCodinChallenge

  - This project is a brief/funny presentation of my profil, my studies and my experiences.</br>
  - The project is developed with : Angular 9
  - The app is deployed ! give it a try : https://dr1sshamra.azurewebsites.net

## Getting Started

 1. Go to project folder and install dependencies:</br></br>
     `npm install`
 2. Launch development server, and open localhost:4200 in your browser:</br></br>
     `npm start`
     
## Architecture
######  Since it's a small project i used only one module. (feature module not used)</br></br>


    - dist/                        compiled version</br>
    - e2e/                         end-to-end tests</br>
    - src/                         project source code</br>
    |- app/                      app components</br>
    |  ||- home_component         home page</br>
    |  ||- question_component         response page</br>
    |  ||- app.component.*        app root component (shell)</br>
    |  ||- app.module.ts          app root module definition</br>
    |  ||- app-routing.module.ts  app routes</br>
    |  +- ...                    additional modules and components</br>
    |- assets/                   app assets (lottie animation, questions template...)</br>
    |- environments/             values for various build environments</br>
    |- index.html                html entry point</br>
    |- main.scss                 global style entry point</br>
    |- main.ts                   app entry point</br>
    |- polyfills.ts              polyfills needed by Angular</br>
    - proxy.conf.js              backend proxy configuration</br>
    
### Prerequisites

- nodejs
- Angular CLI 9
- code editor ( visual studio code )

## Authors

* **Driss HAMRA** - 

