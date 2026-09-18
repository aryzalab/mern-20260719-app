# React with Next.js

## JS DOM

- Document Object Model (DOM)
- DOM represents HTML Document as a tree of objects
- DOM Manipulation is a process of using JS to dynamically update the content, styles, structure of html/webpage.

## React

- Library for web and native user interfaces
- Built and maintained by Facebook
- Used to build single page app (one html file only)
- Uses virtual DOM for rendering
- Most popular frontend framework
- Huge community
- Job opportunities

## JSX - JavaScript Syntax Extension

- JS + HTML Code

## Virtual DOM

- Lightweight copy of real DOM
- Whenever state change occurs:
  - React updates the virtual DOM
  - Compares the virtual DOM with previous DOM (Diffing)
  - Updates only the changed parts in the Real DOM (Reconciliation)
- Faster rendering
- Performance is better

## Components

- UI Block
- Reusable
- Functional Component, Class Component
- Functional components are stateless components by default
- Class components are stateful components
- Hooks: special function
- Stateless: State can be updated, UI cannot be updated
- Stateful: State/UI can be updated

## Props (of a component)

- Properties/attributes
- Similar to HTML element attributes

## States

- Mutable (changeable) object
- Whenever state changes, UI is re-rendered
- State value changes on user interation, event trigger or API calls

## Hooks

- useState
- useEffect
- useRef
- useReducer (x)
- useContext (x)

## Zustand (Global state management library)
