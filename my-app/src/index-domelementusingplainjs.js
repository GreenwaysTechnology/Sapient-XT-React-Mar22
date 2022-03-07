//How to create simple element using plain javascript

function createElement() {
    let Heading = document.createElement('h1')
    console.log(Heading)
    Heading.innerHTML = "Hello React!"
    let rootElement = document.getElementById('root')
    rootElement.appendChild(Heading)
}
createElement()