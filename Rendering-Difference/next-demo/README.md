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
    Next JS, by default, without any configuration, statically generated every page in our app when we build it for production. This allows the page to be cached by a CDN and indexed
