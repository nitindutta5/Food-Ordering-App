# Food Ordering App - React js & Redux Toolkit

Note: Using swiggy's public api's so for your local env use some cors extension.

### SOME IMPORTANT QUESTIONS


## What is Emmet?
Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time

## Difference between a Library and Framework?
Framework has more rules and boundations. 
Library has fewer rules and boundation. You just need to plug and play. Integration is simple as compared to a framework,

## What is CDN? Why do we use it?
CDN is a content delivery network, they are used to resolve the problem of latency. Latency is basically the time taken by a request to connect to your server.
CDN stores a cached version of its content in multiple geographical locations (a.k.a., points of presence, or PoPs). Each PoP contains a number of caching servers responsible for content delivery to visitors within its proximity.
In essence, CDN puts your content in many places at once, providing superior coverage to your users.

## Why is React known as React?
React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app's data, the view should “react” or change with those user events.

## What is difference between React and ReactDOM?
Before React 14 both were part of the React library. But after the split was done:
React: React is a javascript library, designed for building better user interfaces.
React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM
Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM


## What is the difference between react.development.js and react.production.js files via CDN?
Production cdn files are minified for optimization and the development has the normal js file.
 
## What is async and defer?
By default, the scripts are downloaded and executed then and there and doms parsing continues after that.
Async, the scripts are downloaded parallel to DOM parsing and then script is executed and then DOM parsing continues.

Defer, the scripts are downloaded parallel to DOM parsing and then execution happens after DOM parsing is done.
## What is `NPM`?
It's a library and registry for JavaScript software packages.

## What is `Parcel/Webpack`? Why do we need it?
Webpack/ Parcel are both bundlers. We need bundlers for converting our written javascript code into production ready code which is optimised. 

## What is `.parcel-cache`?
It the folder which is created when we create the build file using parcel.

## Why is npx?
The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

## What is difference between `dependencies` vs `devDependencies`?
The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. 

## What is tree-shaking?
It is one of the features of the latest module bundlers such as parcel or webpack , which helps in removing the unused code during the build time for making an optimised build.

## What is Hot Module Replacement?
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.
 
## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- Caching
- Minifying
- HMR(Hot Module Replacement)
- Image Optimisation
- Tree Shaking
- Code splitting

## What is `.gitignore`? What should we add and not add into it?
It is a file wherin we define the files and folder which we want git to ignore. We should add node_modules, .env, and all the file folder which we dont want the git to read. Note: We shouldn't add package.lock.json in our gitignore file.

## What is the difference between `package.json` and `package-lock.json`?
Package.json file is create on npm init while the package-lock.json is created on installing the dependencies defined in package.json
You should commit package-lock. json to your code repository. Sharing this file with teammates and the production environment is the best way to make sure that everyone has the same configuration for their copy of the project.

## Why should I not modify `package-lock.json`?
It is a file generated on installation and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies and the exact version of each dependency

## What is `node_modules` ? Is it a good idea to push that on git?
These are folder which contains all the dependency related files which are generated post installation and this is the place from where we import the installed packages. 
No, because it is regenerated on the server.

## What is the `dist` folder?
It's the folder that contains the build files, which are minified and contains browser understandable code.

##  What is `browserlists`?
 It's a library to config the target browsers and Node.js versions between different front-end tools.


## What is `JSX`?
JSX is html like syntax used to write UI part in React. 

## What is the superpower of JSX?
Using JSX, you can write htmllike syntax inside Javascript, providing you with a superpower to write logic and it is easy to maintain and debug.

## Role of type attribute in script tag? What options can I use there?
To define the type of javascript the script tag is importing.

-text/ecmascript : this value indicates that the script is following the EcmaScript standards.
-module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
-text/babel : This value indicates that the script is a babel type and required bable to transpile it.
-text/typescript: As the name suggest the script is written in TypeScript.

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
 TitleComponent is a javascript expression which tolds some jsx.
<TitleComponent/> is a react component.
<TitleComponent></TitleComponent> is a react component which wraps a child component.  


## Is jsx mandetory for React?
A: No it is not mandetory. You can use react.createElement to create an element. But JSX is more easy to understand and is readable.

## Is ES6 mandetory for React?
A: No it is not mandetory. You can also use vanilla js in react as well. It's a library. It gives you that flexibility.

## How can I write comments in JSX?
A:  Example-    {/* <h1>Food Villa</h1>  */}

## What is <React.Fragment><React.Fragment> and <></>?
A: Fragment lets to wrap group of children without adding an extra node in the DOM. And <></> is the shorthand for <React.Fragment></React.Fragment>. As of now only key attribute can only be passed to a fragment.

## What is Virtual DOM & Reconciliation?
The virtual DOM (VDOM) is a virtual representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.  The mechanism to diff one tree with another to determine which parts need to be changed and then update the original DOM with it is called Reconciliation .

## What is React Fiber?
A: Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM

## Why we need keys in React? When do we need keys in React?
A: Keys help React to identify which child to update or to remove. Basically helping the make change in particular child rather than rerendering the complete component. We need keys when there are multiple same chilren elements inside a component.

## Can we use index as a key?
A: Yes we can use index as a key but its not recommended to use index as key. It may break your application by displaying incorrect data. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.

## What are props in React?
Props are basically the properties wich you pass to a component. Just like the arguments of a function. Props are immuteable.
<Student name="Nitin" age={12} />
Here name and age are the props of the component Student.

## What is a Config Driven UI?
A: Config driven UI is a way to develop an application where what needs to be rendered on screen is decided by the response we get from the backend API's. This is kind of a industry standard. 

## Difference between Monolith and Microservice acrhitecture?
A: https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith

## why useEffect() callback cannot be async
A: You cannot directly make the callback function supplied to the useEffect hook async because: async functions implicitly return a promise, and; useEffect expects its callback to either return nothing or a clean-up function.