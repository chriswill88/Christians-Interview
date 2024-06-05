# Kibu Technical Project

Welcome to the Kibu Technical Project portion of the interview! Congratulations for making it this far. This project should take between 1-2 hours to complete.

## Overview

The admin tooling features of Kibu are a large part of our product. In this project you will create a basic implementation of viewing and creating notes for a user. You will create a basic react front end which connects to a simple backend containing users and notes.

## Video

## Specification

Your solution must include the following:

1. Utilize React and TypeScript ✅
2. A page to list all users and their respective notes ✅
3. Ability to create a new note for a user ✅

If time allows the following are nice to have features:

1. Add a new field to note called `timestamp` which tracks the current time when saved ✅
2. Ability to update a note ✅
3. Add a new resource in the backend called `audit_log` which tracks changes when a note is updated ✅

The following can be considered out of scope:

1. Authorization, authentication, and security of the backend server

## run dev server
npm install 
npm run dev

## Backend Server

To help with your implementation we have provided a way to easily use a backend server with the `json-server` package. First install the `json-server` package with

```
npm install -g json-server
```

Then start the server using

```
json-server --watch db.json
```

You should see the following output in your terminal

```
Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/members
http://localhost:3000/notes
```

This will create GET, POST, PUT, PATCH, and DELETE routes for both `/members` and `/notes`.

You can learn more about `json-server` [here](https://www.npmjs.com/package/json-server/v/0.16.1)

## Getting Started

To complete this project you will not need to make any changes to the `json-server`. Therefore, to get started you should create a new React App. You can learn more from the [React Docs](https://react.dev/learn/start-a-new-react-project)

## Scoring

You will be scored on:

1. Code functionality
2. Code quality
3. Thoughtful design and UI
4. Documentation on any design decisions or libraries used

Bonus points for:

1. Using [NextJs](https://nextjs.org/docs) with server components
2. Using [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)

## Submission

You will submit your code via GitHub (or your git repository of preference) and email the link to [ben@kibuhq.com](mailto:ben@kibuhq.com). Your Git repo should include documentation on how to run your application locally.

Feel free to reach out to ask followup questions or clarify any requirements.
