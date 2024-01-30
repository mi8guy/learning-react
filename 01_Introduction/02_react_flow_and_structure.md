## Inspecting the script tag in html.
Took a look at index.html in both create-react-app and vite app
Point of Interest was injection of script tag in the html

In case of create-react-app, react-scripts injects it and also some other tags are injected.

In case of Vite, script tag is specified directly in the index.html

## Creating new js files that are similar to App.jsx
In vite:

    -  Created a chai.js file and wrote a basic function that returned a h2 tag. Also specified the default export.

    -  Stumbled upon few errors. Firstly, it wants us to use .jsx. After this refactor, the error went away but the app showed a blank screen.

    -  Upon inspecting the console, we found that it needs the Component to begin with a Uppercase character. Like <Chai /> as opposed to <chai />

    - These are not errors, just best practices. Having the file name as `chai.jsx`, `function chai()`, and `import Chai...` instead of `import chai...` and specifying <Chai /> makes the app work again!

    - However, it is considered best practice when the filename and the function is Uppercase as well.

In create-react-app: 

    - Created a chai.js file and wrote a basic function that returned a h2 tag. Also specified the default export.
    
    - This didn't enforce to use .jsx instead of .js. It worked with .js
    
    - But this also has similar issues when we try to use <chai />. It ignores it and simply says that the imported function chai is never used.

    - Upon importing it as `import Chai from './chai` and specifying <Chai />, it works.


## Component best practice

So all these functions are components and should be Capitalized.

The file name is also advised to be Capitalized.

Some libraries enforce use of jsx files for components. 


## React DOM 

React DOM is a virtual DOM.
It compares with the DOM tree and updates only the changes to the actual DOM.

