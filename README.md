# Trivia Challenge!

A simple, 10 question, true or false, trivia app built with React.

## Live demo

Check a live demo of the app:

* [Styled UI version](https://code-challenge-julian-antonielli-zngycbbiza.now.sh/).
* [Wireframe version](https://code-challenge-julian-antonielli-qddkihirlr.now.sh).

## Core tools/libraries used

* create-react-app
* React
* Redux
* Reselect
* React router
* Styled components

## Project directory structure

* `/lib` Contains misc utility functions.

* `/screens` Contains top level routes (`'/'`, `'/quiz'`, `'/results'`).
  Every screen has a corresponding directory inside the `/screens` directory, e.g: `/screens/quiz`.
  This directory contains a `Layout` component, which represents the view part of the screen, and a `Container` component, which augments `Layout` with behaviour (by connecting to the redux store, etc). Additionally, this directory may contain a `components` directory, where components specific to this screen are located.

* `/state` Contains redux-related modules: store setup, action creators,
  reducers and selectors.
  **All** state access from components should be from selectors, this allows the application to be agnostic of how the data is stored.
  The app state is stored using a clever data structure: a zip list. This data structure has 3 parts called `answered`, `current` and `remaining`.
  `current` is the currently shown question, the one the user must respond at the moment.
  When the user answers this quiz question, it is moved into the `answered` array, augmenting the question object with the answer the user has input.
  `remaining` is simply an array of the remaining questions.
  No computed/derived data is saved in the store, as this can just be accessed by using selectors (which are memoized, so there's no performance impact).

* `/components` Contains general-purpose React components that could be reused
  in different parts of the application.

* `/assets` Contains application assets such as images.

* `/adapters` Contains adapter objects/functions which format data from the API
  to the way the application expects it.

* `/api` Contains API setup and functions to interact with it.

* `/config` Contains application-level configuration, such as global styles.

## Development time

This project took about 7 hours from planning/project design to complete implementation.
