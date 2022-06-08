This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Routing Section Intro 
## Routing in a React app
    # Install a third party package
    # routes.js file to configure the routes

## Routing in Next.js app
    # Route with Pages
    # Nested routes
    # Dynamic routes
        Product Listing Page
        Product id can also be a string
    # Catch -all routes
    # Navigate from UI
    # Programmatically navigate between Pages

## Routing Summary
    1. Page based routing mechanism - Pages are associated with a route based on their file name
    2. Nested routes - Nested folder structure, files will be automatically routed in the same way in URL
    3. Dynamic routes - Can be created by adding square brakcets to a page name
    4. Catch all routes - Add three dots inside square brackets to create a catch all route.Helpful when you want different URLs for the same page where some of the route parameters are optional
    5. Link component to navigate on click of an element
    6. useRouter hook's router.push method to navigate programmatically
    7. How to creat a custom 404 Page.