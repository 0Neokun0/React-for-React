This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
# Project Structure
    https://jasonwatmore.com/post/2021/08/19/next-js-11-user-registration-and-login-tutorial-with-example-app#account-layout-jsx
    
    * components
    React components used by pages or by other React components.
    Global components are in the root /components folder and feature specific components are in subfolders
    (e.g. /components/account. /components/users).

    * data
    JSON flat files for storing the Next.js tutorial app data.

    * helpers
    Anything that doesn't fit into the other folders and doesn't justify having its own folder.
    Front-end React helpers are in the root /helpers folder and back-end API helpers are in the /helpers/api subfolder.

    * pages
    Pages and API route handlers for the Next.js login tutorial app. The /pages folder contatains all routed 
    pages with the route to each page defined by its file name.

    * services
    Services handle all http commnication with backend apis for the React front-end application, each
    service encapsulates the api calls for a content tyep (e.g.users) and exposes methods for performing various operations(e.g.CRUD operations).
    Services can also perform actions that don't involve http calls, such as displaying and clearning alrets with the alert service.

    * styles
    CSS stylesheets used by the Next.js tutorial app.

    JavaScript files are organised with export statement at the top so it7s easy to see all exported modules when you open a file.
    Export statement are followed by functions and other implementation code for each JS module.

    The index.js files in some folders (components,helpers,services) re-export all of the exportes from the folder so they can be
    imported using only the folder  path insead of the full path to each file, and to enable importing multiple modules in a single import
    (e.g. import { errorHandler, jwtMiddleware } from 'helpers/api').

    The baseUrl is set to "." in the jsconfig.json file to make all import statements (without a dot '.' prefix) relative to the root folder of the project, removing the need for 
    long relative paths like import { userService } from '../../../services';.

## Account Layout component
    Path:/components/account/Layout.jsx
    The account layout component contains common layout code for all pages in the /pages/account folder,
    it simply wraps the {children} elements in a div with some bootstrap classes to set the width and 
    alignment of all of the account pages. The Layout component is importen by each account page and used to wrap the returned JSX template
    (e.g. login page, register page).
