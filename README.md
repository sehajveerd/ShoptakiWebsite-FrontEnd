# Crowdfunding Real Estate AI Web UI

## Project Local Setup

1. Clone the repository

   ```bash
   git clone https://github.com/Shoptaki/real-estate-fe.git
   ```

   or

   ```bash
   git clone git@github.com:Shoptaki/real-estate-fe.git
   ```

2. Setup node version

   ```bash
   nvm use
   ```

   If Node.js version 18.16.0 is not installed, install it by running:

   ```bash
   nvm install 18.16.0
   ```

   If NVM is not installed on your machine, follow the steps outlined in this https://docs.google.com/document/d/1HzJmClgayYUQjOEZe5Npb1g0OHha7PanoFX2_hVeSoc/edit#heading=h.78splvr7i5t1.

3. Set Up Visual Studio Code

   In your Visual Studio Code:

- Install the ESLint and Prettier plugins from the Extensions view (Ctrl + Shift + X).
- Open the Settings (Ctrl + ,), search for "format on save" and check the box to enable it.
- In the Settings, search for "default formatter" and select "Prettier - Code formatter" as the default formatter.

4. Install Dependencies
   In the project root directory, run:

   ```bash
   npm install
   ```

   This will install all the dependencies needed for the project.

5. Start the Application
   Start the application by running:
   ```bash
   npm run start
   ```
   The application will start on your local machine and can be accessed at http://localhost:3000.

## Project setup steps followed

https://docs.google.com/document/d/1HzJmClgayYUQjOEZe5Npb1g0OHha7PanoFX2_hVeSoc/edit?usp=sharing

## Project Structure

This project follows a structured layout to organize the codebase. Here's a brief overview of the structure and the purpose of each directory and file:

- `public`: This directory contains public assets that aren't handled by Webpack, like the index.html file and images.

- `src`: This is where all the JavaScript code, styles, assets, and tests are located. Each file in this directory should export a React component or a JavaScript module.

- `components`: Contains reusable React components that can be used across different pages. Each component should be in its own file.

- `pages`: Contains components representing whole pages in the application. Typically, a page component will use multiple components from the components directory to assemble a page.

- `store`: Contains all the Redux code for managing the application state.

  - `actions`: Contains Redux action creators. Each action creator should be a function that returns an action.
  - `reducers`: Contains Redux reducers. Each reducer should be a function that takes the current state and an action, and returns the new state.
  - `middlewares`: Contains any custom Redux middleware. Middleware can be used to handle complex action side-effects, or to modify the dispatch process.

- `index.js`: The entry point for the Redux store. This is where the reducers and middleware are combined to create the Redux store.

- `App.css`: Contains global styles for the application.

- `App.js`: The main React component that serves as the entry point for the application's component tree.

- `index.js`: The JavaScript entry point for the application. This is where the React component tree is rendered to the DOM, and where the Redux store is provided to the application.
