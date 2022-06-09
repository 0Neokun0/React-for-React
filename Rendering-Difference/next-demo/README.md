This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

# Static Generation
    * A method of pre-rendering where the HTML pages are generated at build time
    * The HTML with all the data that makes up the content of the web page are generated in advance when you build your application
    * Recommended method to pre-render pages whenever possible
    * Page can be built once, cached by a CDN and served to the client almost instantly
    * Ex: Blog pages, e-commerce Product Pages, documentation and marketing pages

## Static Generation - HOW?

    * Next Js, by default will pre-render every page in our app
    * The HTML for every page will automatically be statically generated when we build our application

## Static Generation contd.
    * Next JS, by default, without any configuration, statically generated every page in our app when we build it for production. This allows the page to be cached by a CDN and indexed

## getStaticProps
    1.
        * getStaticProps runs only on the server side
        * The function will never un client-side
        * The code you write inside getStaticProps won't even be included in the JS bundle that is sent to the browser
    2.
        * You can write server-side code directly in getStaticProps
        * Accessing the file system using the fs module or querying a database can be done inside getStaticProps
        * You also don't have to worry about including API keys in getStaticProps as that won't make it ot the browser
    3.
        * getStaticProps is allowed only in a page and cannot be run from a regular component file
        * It is used only for pre-rendering and not client-side data fetching
    4
        * getStaticProps should return an object and object should contain a props key which is an object*
    5.
        * getStaticProps will run at build time
        * During developement, getStaticProps runs on every request
## Static Generation Summary so far
    Static generation is a method of pre-rendering where the HTML pages are generated at build time
    With and without external data
    Export getStaticProps function for external data
    HTML, JavaScript and a JSON file generated
    If you navigate directly to the page route, the HTML file is served
    If you navigate to the page route from a different route, the page is created client side using the JavaScrip and JSON prefetched from the server

## getStatic Paths and fallback
    fallback : false
    fallback : true
    fallback : 'blocking'