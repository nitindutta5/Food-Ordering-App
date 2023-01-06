# NR - chapter3

What is `JSX`?
JSX is html like syntax used to write UI part in React. 

What is the superpower of JSX?
Using JSX, you can write htmllike syntax inside Javascript, providing you with a superpower to write logic and it is easy to maintain and debug.

Role of type attribute in script tag? What options can I use there?
To define the type of javascript the script tag is importing.

-text/ecmascript : this value indicates that the script is following the EcmaScript standards.
-module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
-text/babel : This value indicates that the script is a babel type and required bable to transpile it.
-text/typescript: As the name suggest the script is written in TypeScript.

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
 TitleComponent is a javascript expression which tolds some jsx.
<TitleComponent/> is a react component.
<TitleComponent></TitleComponent> is a react component which wraps a child component.  
