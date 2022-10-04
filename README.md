# SBAB

Caspar Sylwan 
Instrutions to run the application – SBAB Code test


Frontend  code can be found here: https://github.com/casparsylwan/sbab-frontend
\
Backend code  can be found here: https://github.com/casparsylwan/SBAB
\
\

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.
\
To be able to  run the Frontend, you have to download Angular CLI through Node.js and then run the command:

 npm install -g @angular/cli

To bypass web browse security CORS, the Frontend has to be run with config file and therefore run the following command after cloning down the projet: 

ng serve

The Frontend runs on localhost:4200

To be able to run the Backend, it is required to register an account and get an API key from: 
https://www.trafiklab.se/
https://www.trafiklab.se/api/sl-hallplatser-och-linjer-2. 


Backend
This project can be run by Java 11 or higher, and it is a spring boot maven project.  
The key should be placed in the application properties after api.key-value. 
The backend runs on localhost:8080


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
