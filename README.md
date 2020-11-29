##  The Cocktail Cabinet

A responsive web application to view all the Cocktails of diffrent catagories with some basic filters.

##Repository and URLs

##### Application URL -> 
[The Cocktail Cabinet](https://the-cocktail-cabinet.web.app/) or
https://the-cocktail-cabinet.web.app/

##### Repository URL -> 
[The Cocktail Cabinet Repo](https://github.com/MdShahrukh/The-Cocktail-Cabinet) or
https://github.com/MdShahrukh/The-Cocktail-Cabinet


## Features and Functionalities
 ##### 1. Server Side Renedring
Used Angular Universal to implement Server Side Rendering. This helped to achieve fast first page load time and an SEO friendly web page. For the Server, I have used a serverless framework by google firebase with node js. To validate this just right-click, on the web app, and see the page source, you will she entire HTML there.

##### 2. Infinite scrolling.
Kept the batch size equals to 6 (instead of loading all the data get from API) as a user will not be able to see all 100 in one go (especially for mobile) - so another set of data will be fetched when the user scrolls the page (once the user reaches to end, little before that). This is typically how we see social media feeds are getting scrolled these days. The intent to provide a good user experience.

##### 3. A decent light house score
**Performance** - 100/100 ; **Accessibility** - 96/100 ; **Best Practice** - 93/100 ; **SEO** - 80/100
 Link to Image -https://github.com/MdShahrukh/The-Cocktail-Cabinet/blob/master/docs/lighthouse-test.PNG

![](https://github.com/MdShahrukh/The-Cocktail-Cabinet/blob/master/docs/lighthouse-test.PNG)

##### 4. Unit Testing 
dded unit test cases for components to test the business logics of the application. Please find the screenshot for the same. Use ng test to run all the test-cases.
Link to Image - https://github.com/MdShahrukh/The-Cocktail-Cabinet/blob/master/docs/karmatest-runner.PNG

![](https://github.com/MdShahrukh/The-Cocktail-Cabinet/blob/master/docs/karmatest-runner.PNG)

##### 5. Formatting Checker

TS Linter has been used to check any formatting issues before build gets triggered. If there are any issues in formatting than it fails and terminates the build and deployment of the application. You can find the linting script in package.json file ng lint, which then checked before the build and deployment process. npm run lint && ng build --prod. It can be bypassed by removing it from the command.

##Deployment

###### Google Firebase is used for this.
Used Firebase Hosting and Cloud Functions to host our SSR application. This serverless framework eliminated the overhead of creating a server and configuring everything there.

###### Easy to deploy
All it needs to deploy our front-end is just one command - npm run deploy.

It runs linter, builds the code, and then deploys to the firebase. 
Firebase internally uses google cloud APIs to deploy the cloud functions - cloudfunctions.googleapis.com and cloudbuild.googleapis.com

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# ----Thanks :) 
Please provide your feedback for the areas to be improved.
