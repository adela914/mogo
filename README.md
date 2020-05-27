# MOGO🍱

Mogo means "Eat!" in Korean. This application is for people who have a craving for good authentic Korean Restaurants in Berlin. In this application people can share their favorite restaurants and their opinions about the restaurants.

For this project I mainly aimed to make the four basic functions of CRUD.

## How to run

### Backend

First of all, please make sure MongoDB is running.

```
$ mongod
$ mongo
```

```
$ cd backend
$ npm i
$ nodemon index.js

```

http://localhost:3000

### Frontend

```

$ cd frontend
$ npm install -D pug pug-plain-loader
$ vue add vuetify
$ npm i
$ npm run serve

```

http://localhost:8080/

## Users can

<ul>
  <li> <b><em>C</em></b> : share a new restaurant and write comments.
  <li> <b><em>R</em></b> : see posted restaurants and comments.
  <li> <b><em>U</em></b> : update information of restaurants.
  <li> <b><em>D</em></b> : delete their posts by confirming their password.
 <hr>
  <li> <b><em>Bridging APIs</em></b> : sing in for newsletter. (<a href="https://mailchimp.com/developer/">Mailchimp</a> API used)
</ul>

## Details

<ul>
<li> Search restaurants by name.  </li>
<li> Upload image by url.
<li> Leave comments and see them right away.</li>
<li> Delete their posts only by confirmation with password. </li>
<li> In case they put wrong password they should get informed. </li>
<li> Sign up for newsletter and get an alert of confirmation. </li>
<li> Like restaurants.</li>
<li> Check out most popular 3 restaurants based on the number of likes.</li>
<li> Responsive design.  </li>
<li> When users don't upload an image default image should show up.</li>
</ul>

## Backend

Major frameworks used for backend :

<ul>
<li> Node.js </li>
<li> Express </li>
<li> MongoDB </li>
<li> Axios </li>
</ul>

## Frontend

Major frameworks used for frontend :

<ul>
<li> Vue.js </li>
<li> Pug </li>
<li> Vuetify </li>
</ul>

## API

To be able to communicate with users better. Users can sign up for newsletter.
For that <a href="https://mailchimp.com/developer/">Mailchimp</a> API is used.

## Test

For testing application Avajs/Ava has been used.
