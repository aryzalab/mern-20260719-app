# Next.js

- It is a full stack React.js framework for building web apps.
- In addtion to building UI components, it also provides features like routing, styling, data fetching, rendering, optimization, etc.
- It uses react server component
- It is opinionated framework (file, folder convention)

## Features

1. Routing: file based routing
2. Rendering: Client side rendering (CSR), Server side rendering (SSR), Static site generation (SSG)
3. Optimization: images, fonts, scripts
4. Data fetching: Async data fetching
5. API routes
6. Styling

## Routing

- file based routing
- All routes must be inside `src/app` directory
- Every routes must have `page.js` or `page.tsx`
- `page.js` or `page.tsx` file must have a default export react component

1. Simple routes

- Create a folder inside `src/app` directory and add `page.js` file
- /src/app/about/page.js
- /src/app/products/page.js

2. Nested routes

- /src/app/courses/backend/nodejs/page.js
- /src/app/courses/backend/laravel/page.js
- /src/app/courses/frontend/react/page.js
- /src/app/courses/frontend/vue/page.js

3. Dynamic routes

- Create a folder enclosed by [].
- /src/app/products/[id]/page.js

4. Nested dynamic routes

- /src/app/products/[id]/reviews/[reviewId]/page.js

5. Catch all segments

- Create a folder enclosed by []
- The route name should have rest operator as prefix
- /src/app/blogs/[...slug]/page.js

6. Private folders

- /src/app/\_myfolder

7. Route groups

- /src/app/(auth)/login
- /src/app/(auth)/register

## Layouts

- UI block that is shared among different pages, components
- `layout.js` or `layout.tsx`
- `children` props are available by default

## Special files

- `page.js`
- `layout.js`
- `loading.js`
- `not-found.js`
- `error.js` => Always a client component

## React server component

### 1. Server component

- All react server components Next.js are server components (type) by default
- It can do server side tasks like data fetching, file read, async tasks.
- Cannot use react hooks, user interaction, events

### 2. Client component

- Can use react hooks, user interaction, events
- Traditional react component
- Use the directive `use client` on the top of component

## Params and SearchParams

1. For server component

- params: dynamic route params, available on `page.js` and `layout.js`
- searchParams: query params, available on only `page.js`

2. For Client component

- useParams();
- useSearchParams();
