const heading = document.querySelector(".heading")
console.log(heading)
heading.innerText += '---updated dynamic heading ----'
//attributes set and get
const link = document.querySelector('a')
link.setAttribute("href", "www.google.com")
const pTag = document.querySelector('.p')
pTag.setAttribute("style", "color:#004b23")
//changing css styles
pTag.style.margin = "50px"
//classes add remove

/*const topNav = document.querySelector("nav")
const topNavChildren = Array.from(topNav.children)
topNavChildren.forEach(child => {
    child.classList.add("color")
})*/
/*const productAdd = document.querySelector("button")
const products = document.querySelectorAll("li")
productAdd.addEventListener("click", ()=> {

})
products.forEach(product => {
    console.log(products)
    product.addEventListener("click", (event)=>{
        event.target.style.textDecoration = "line-through"
        //event.target.remove()
    })
})

const button = document.querySelector("button")
button.addEventListener("click", ()=> {
    const addProduct = document.querySelector("ul")
    const newLi = document.createElement("li")
    newLi.innerText = "New Product"
    addProduct.append(newLi)
})
//EVENT BUBBLING  EVENT DELEGATION
*/
const products = document.querySelectorAll("li")
products.forEach(product => {
    console.log(products)
    product.addEventListener("click", (event)=>{
        event.target.style.textDecoration = "line-through"
        //event.target.remove()
    })
})
const addProduct = document.querySelector("ul")
const button = document.querySelector("button")
button.addEventListener('click', ()=> {
    const li = document.createElement("li")
    li.textContent = "New Product"
    addProduct.append(li)
})
addProduct.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});

products.addEventListener('copy',(event) => {
    const copyAlert = (event) => {
        if(event.tagName === 'LI') {
            alert("Make sure to give credit")
        }
    }
})