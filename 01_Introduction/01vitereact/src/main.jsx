import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// This works because in the end component is just a function.
function MyApp(){
  return (
    <h2>Custom App!</h2>
  )
}

// Lets see if the object works directly.
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://www.google.com",
//       target: "_blank",
//   },
//   children: 'Click me to visit google.'
// } 

// Lets see if this works
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// Lets see what type is expected
const reactElement = React.createElement(
  'a',
  {href : "https://google.com", target: '_blank'},
  'click me'
  )

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />   //Eventually this gets transpiled / parsed to that reactElement Object 
    // MyApp() // Funfact: this also works!
    // <ReactElement/> // This doesn't work because its expecting some other type 
    // ReactElement  // Specifying just this also won't work
    // anotherElement // This works because conversion to object is happening behind the scenes. In case of ReactElement, it doesn't have proper type that render is expecting.
    // reactElement // this works because it is in accordance with parameters requirements.

    <App />    
)
