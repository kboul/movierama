# MovieRama

App was developed using es6 & typescript for type checking.
jQuery is used only for toggling bootstrap tabs.

## Run the project

clone the project

select master branch

Navigate to the root folder:

```
npm install
```

```
npm start
```

browser listens to localhost:1234 as default port

## Test the project

```
npx jest or npm test
```

Get the project's test coverage

```
npm run test:coverage
```

## Instructions how to use the app

The app is a clone of the moviedb.org website. It provides 3 basic functionalities.

The landing page gives the opportunity to see the first 20 movies from the Now Playing section of the moviedb in a card form. The card consists of a poster on the left and relevant movie information on the right. These are:

-   Title
-   Date of release
-   Genre
-   Percentage rating
-   Description / Plot
-   More Info (clickable)

The rating bar is displayed with green color if a movie has more than 70% rating, with yellow color once it has rating bigger than 0 and smaller than 70% and no color if it has no rating.

Once reaching every time to the bottom, another 20 movies are added via infinite scrolling, therefore the user can scroll until now playing movies limit is reached.

By clicking on the **More Info** a modal is displayed. It has 3 tabs:

-   Video Trailer
-   Reviews
-   Similar Movies

By clicking on each tab the user can see the selected movie's video trailer, read up to two reviews concering the movie and receive up to two similar movies suggestions.

On the upper page part of now playing movies screen there is a search bar. The user can type a movie there and receive all relevant movies' information in card form similarly to now playing movies screen. More Info link can be similarly clicked and watch a video trailer, reviews & similar movies sections.

## Build the project

```
npm run build
```

## Deploy the project

```
npm run deploy
```
