// Write your code here!

const main = document.querySelector("main#main")
main.remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"

document.appendChild(newHeader)




// const newHEader = document.querySelector("h1#victory")