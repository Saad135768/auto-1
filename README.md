### Description

A fully-dynamic, fully responsive Cars app. Where the user can preview & filter all cars, beside adding cars to his favourites.

### Prerequistes
- NPM
- GIT

### How to Setup: 

1. Clone the repository and checkout to `main` branch

2. Install the dependecny packages
  ```
  npm i
  ``` 
3. Run the project
  ```
  npm run dev
  ``` 


## Project structure
  ##### modules (This holds the components; where every page has a folder, inside each folder got all the components used solely inside this page)

  + home
    > filters
  + favourites
  + layout
    >navbar
    <br/>
    >footer
  + singleCar
  + 404

##### common (This holds the components used multiple times across the app)

  +button
    >index.js
  +card
    >index.js
  +pagination
    >index.js
  +wrapper
    >index.js

##### pages (Those are used as the routing for each page)

##### styles (This holds the main style file, where all the other styling files are imported inside the global.css)
  + global.css
### Approach Documentation
##### What is covered
- Separate components are prepared for every section
- Every component holds its own index and styling file
- All styling files are imported inside the global.css in the styles folder
- common components folder is created, where it holds the components used in multiple places across the app.
- Server side fetching were used.
- A favourite icon is added to the navbar, as a route to the favourites page.
- A favourites page was added as place, where the user can view all the products he added to his favourite list; using localStorage as a mimic for the DB.
- The user can add/or remove product from the favourite list through the fav icon in each card, or by navigating to the car's single page and press the save button.
- Optimzation and best practices were implemented.

##### Framework/Libraries used
- Next.js For overall development
- Bootstrap for styling
