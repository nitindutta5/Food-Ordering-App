# NR - chapter3

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

