### Introduction

Continuing on your work with the Launch Academy FAQ from last week, it's time to make some
upgrades. Now you'll refactor the site to use an API endpoint with Fetch and add testing!

### Setup

From your challenges directory, run the following:

```no-highlight
$ et get launch-academy-faq-part-2
$ cd launch-academy-faq-part-2
$ npm install
$ npm start
```

Then, visit <http://localhost:8080> in your browser. You should see a starter version of the
code that should look close to your finished version from Part 1 last week.

### Instructions

This is a multi-part challenge just like last week. You should not expect to complete this assignment
in one sitting. Expect that there will be other lessons you will need to complete
in order gain the knowledge and experience to complete this challenge.


### Requirements, Part One: `fetch` the Data

Currently, your application retrieves data from a local file, `src/constants/data.js`.
We would like to refactor the app to **retrieve data from an API**, which has
been provided. Run `node server.js` in a separate terminal window.

Use `fetch` to request data from <http://localhost:3000/api/v1/questions>, from
within the appropriate React Component. Use the data in the response to build
your components.

`et submit` your code when you have completed this lesson.

### Requirements, Part Two: Test Your Application

Your app is looking great! The only problem is, other developers won't touch it
until it has tests. Lucky for you, the test setup has already been done.
You even have an example test to get yourself started. Make sure that you
run `karma start` to get the tests running in your terminal.

If you need some help deciding what tests to write, take a look back at the Testing
React Components article. Follow the pattern there and make sure to have the app
thoroughly tested!

Then, `et submit` your code.
