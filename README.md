# NR
What is Emmet?
Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time

Difference between a Library and Framework?
Framework has more rules and boundations. 
Library has fewer rules and boundation. You just need to plug and play. Integration is simple as compared to a framework,

What is CDN? Why do we use it? 
CDN is a content delivery network, they are used to resolve the problem of latency. Latency is basically the time taken by a request to connect to your server.
CDN stores a cached version of its content in multiple geographical locations (a.k.a., points of presence, or PoPs). Each PoP contains a number of caching servers responsible for content delivery to visitors within its proximity.
In essence, CDN puts your content in many places at once, providing superior coverage to your users.

Why is React known as React?
React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app's data, the view should “react” or change with those user events.

What is crossorigin in script tag? 
It enables CORS.

What is difference between React and ReactDOM?
Before React 14 both were part of the React library. But after the split was done:
React: React is a javascript library, designed for building better user interfaces.
React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM
Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM


What is the difference between react.development.js and react.production.js files via CDN?
Production cdn files are minified for optimization and the development has the normal js file.
 
What is async and defer?
By default, the scripts are downloaded and executed then and there and doms parsing continues after that.
Async, the scripts are downloaded parallel to DOM parsing and then script is executed and then DOM parsing continues.

Defer, the scripts are downloaded parallel to DOM parsing and then execution happens after DOM parsing is done.
