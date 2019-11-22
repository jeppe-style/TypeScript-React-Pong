# SI Seminar - Modern Web Technologies
- How did we end up here and where are we going?

## Structure
- Short History
    - 1990 - HTTP + HTML - hyperlinks
    - Javascript - 1995, Brendan Eich, 10 days
    - Templates - PHP (1995)
    - AJAX - paper: `Ajax: A New Approach to Web Applications` (2005, based on google techniques), standard 2006
    - Single Page Application (SPA) - discussed 2003, took off after AJAX
    - NodeJs - 2009,  NPM (2010)
    - Components - React (Facebook, open source 2013), Web Components (2011 - now, Polymer)
- SPA Architecture
    - challenges: browser history, page loads, architecture/engineering
    - components (web components, react etc.)
    - routing (react routing)
    - state management (redux)
- JAMstack
    - client side rendering
- Typescript
    - released 2012
    - why typescript? to develop large scale applications (we need more than a linter)
    - how it is different from javascript
    - 2016 - prevent assigning `null` - the billion-dollar mistake
- Game Example
    - [pong clone](https://thoughtbot.com/blog/pong-clone-in-javascript)



### Additional
- Microfrontends
    - how to split up the work

## Game Example

### Getting started

1. `npx create-react-app si-typescript-game-tutorial --typescript`

### Create Main Page

1. Explain the app files
1. create `components` folder and move the app components into that (fix paths)
2. create the title - `SI Pong`
3. remove logo file
4. add canvas
5. add entities

### Animate Entities

1. Add ball animation
2. Add controls

### Add state

