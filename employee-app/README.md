# Employee polls App
This is the starter code for the final assessment project for Udacity's React & Redux course.

The _DATA.js file represents a fake database and methods that let you access the data. The only thing you need to edit in the  _DATA.js file is the value of avatarURL. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the Create React App to bootstrap the project.

In the "Employee Polls" Project, I build a web app that lets an employee create polls for coworkers. The process goes like this: An employee is asked a question in the form: “Would you rather [option one] or [option two] ?”. Answering "neither" or "both" is not possible.

author: KhanhNH11

## TL;DR

To get started developing right away:
- move to the path 「employee-app」 and execute the following commands
    + install all project dependencies with `npm install`
    + start the development server with `npm start`

## Testing
To get started developing right away:
- move to the path 「employee-app」 and execute the following commands
    + start the test with `npm run test`
## Library used
The project uses bootstrap to support the development of the user interface:
```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

## Project Structure

```bash
├── README.md 
├── package.json # npm package manager file. 
└── start
    ├── public
    │   ├── favicon.ico # React Icon
    │   └── index.html 
    └── src
        ├── actions # actions for app.
        │   ├── login.js # This is the login action.
        │   ├── questions.js # This is the questions action.
        │   ├── shared.js # This is the shared action.
        │   └── users.js # This is the users action.
        ├── componentsUltis # components for app.     
        │   └── _DATA_.js # This is the users action.   
        ├── components # components for app.
        │   ├── App.js # This is the root of app.
        │   ├── Box.js # component Box of app.
        │   ├── CreatePoll.js # component CreatePoll of app.
        │   ├── Dashboard.js # component Dashboard of app.  
        │   ├── Directional.js # component Directional of app.              
        │   ├── Leaderboard.js # component Leaderboard of app.
        │   ├── Login.js # component Login of app.
        │   ├── NavBar.js # component Nav of app.
        │   └── Poll.js # component Poll of app.
        ├── middleware # middleware for app.
        │   ├── logger.js
        │   └── index.js
        ├── reducers # reducers for app.
        │   ├── index.js # reducers root of app.
        │   ├── login.js # reducers login of app.
        │   ├── nav.js # reducers nav of app.        
        │   ├── questions.js # reducers questions of app.
        │   └── users.js # reducers users of app.
        ├── Test # Testing for app.
        │   ├── __snapshots__
        │       ├── App.test.js.snap
        │       ├── Box.test.js.snap        
        │       ├── CreatePoll.test.js.snap
        │       ├── Dashboard.test.js.snap
        │       ├── Leaderboard.test.js.snap
        │       ├── Login.test.js.snap        
        │       └── Navbar.test.js.snap
        │   ├── _DATA.test.js
        │   ├── App.test.js
        │   ├── Box.test.js
        │   ├── CreatePoll.test.js
        │   ├── Dashboard.test.js
        │   ├── Leaderboard.test.js
        │   ├── Login.test.js
        │   ├── Navbar.test.js
        │   └── testStore.js # create store for test
        ├── utils
        │   ├── _DATA.js
        │   └── api.js # A JavaScript API
        └── App.css
        └── index.css
        └── index.js # It is used for DOM rendering only.
        └── logo.svg
        └── reportWebVitals.js
        └── setupTests.js
```

## Backend Server
 [`api.js`](src/utils/api.js) contains the methods to getting data from _DATA.js:
- [`getUserByIdAndPassword`](#getUserByIdAndPassword)
- [`saveQuestion`](#saveQuestion)
- [`saveQuestionAnswer`](#saveQuestionAnswer)

### `getUserByIdAndPassword`

Method Signature:

```js
getUserByIdAndPassword(userName, password);
```

### `saveQuestion`

Method Signature:

```js
saveQuestion(optionOneText, optionTwoText, author);
```

### `saveQuestionAnswer`

Method Signature:

```js
saveQuestionAnswer(authedUser, qid, answer);
```