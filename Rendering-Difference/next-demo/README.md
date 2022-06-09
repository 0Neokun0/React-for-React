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
        1. The paths returned from getStaticPaths will be rnedered to HTML at build time by getStaticProps
        2. If fallback is set to false, then any paths not returned by getStaticPaths will result in a 404 page
    When?
        * The false value is most suitable if you have an application with a small number of paths to pre-render.
        * When new pages not added often.
        * A blog site with a few articles is a good example for fallback set to false

    fallback : true
        1. The paths returned from getStaticPaths will be rended to HTML at build time by getStaticProps.
        2. The paths that have not been generated at build time will not result in a 404 page.Instead, Next.js will serve a "fallback" version of the page on the first request to such a path.
        3. In the background, Next.js will statically generated the requested path HTML and JSON. This includes running getStaticProps.
        4. When that's done, the browser receives the JSON for the generated path.This will be used to automatically render the page with the required props. From the user's perspective, the page will be swapped from the fallback page to the full page.
        5. At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.


    fallback : 'blocking'
        1. When Next.js will render the page on the server and return the generated HTML, the broweser reveives the HTML 
        for the generated path. From the user's perspective, it will transition from "the browser is requesting the page"
        tp "full page is loaded". There is no flash of loading/fallback state.
        2. At the same time, Next.js keeps track of the new list of pre-rendered pages.Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.2

    When?
        On a UX level, sometimes, people prefer the page to be loaded without a loading indicator if the wait time is a few milli seconds. This helps avoid the layout shift.
        Some crawlers did not support JavaScrip. The loading page would be rendered and the full page would be loaded which was causing a problem.

## Static Generation
    Static Generation is a mehtod of pre-rendering where the HTML pages are generated at build time.
    The pre- rendered static pages can be pushed to a CDN, cached and served to clients across the globe alomst instantly
    Static contenet is fast and better for SEO as they are immediately inded by search engines
    Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages seems like a really good approach to a wide variety of applications in production

## Issues with Static Generation
    1. The build time is proportional to the number of pages in the apolication
    2. A page, once generated, can contain stale data till the time you rebuild the application.
        The build time is proportional to the number of pages in the application.

## Incremental Static Regeneration
    There was a need to updte only those pages which needed a change without having a to rebuild the entire app

    Incremental Static Regeneration(IRS)
        With ISR, next.js allows you to updte static pages after you've build your application
        You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data
        HOW?
        In the getstaticProps function, apart from the props key, we can specify a revalidate key
        The value for revalidate is the number of seconds after which a page re-generate can occur