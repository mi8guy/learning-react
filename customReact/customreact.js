// React makes this at the end of the day. V-DOM
const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: 'Click me to visit google.'
} 

function customRender(reactElement, container){
    /**
     
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
     */

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop == 'children') 
            continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)


