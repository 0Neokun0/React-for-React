# Pre-rendering & Data Fetcing Intro

## Types of pre-rendering
    1. Static Generation
        - without Data
        - with Data
        - Incremental Static Generation
        - dynamic parameters when fetching data
    
    2. Server-side rendering
        - data fetching

## Client-side data fetching
## Combining pre-rendering with Client-side data fetching

## React vs Next JS
    By default, Next Js pre-renders every page in the application
    HTML is already generated with necessary data.

## Why pre-render?
    1. Improves Performance
    * In a React app, you need to wait for the JavaScript to be executed
    * Perhaps fetch data from an external API and then render the UI
    * There is a wait time for the user
    * With a pre-rendered page, the HTML is already generated and loads faster

## Pre-rendering helps with SEO
    * If you:re building a blog or an e-commerce site, SEO is a concern
    * With a React app, if the search engine hits your page, it only sees a div tag with id equal to root
    * If search engine hits a pre-rendered page though, all the contenet is present in the source code which will help index that page
    * If SEO is of concern for your app, pre-rendering is what you want

## Pre-rendering Summary
    Pre-rendering refers to the process of generating HTML with the necessary data for a page in our application.
    Pre-rendering can result in better performance and SEO.