let covers = document.querySelectorAll(".cover")
let buy = document.querySelectorAll(".buy")

if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

covers.forEach(e => {
    e.addEventListener("click", () => select(e.parentElement))
    e.addEventListener("mouseleave", () => reversHover(true, "Котэ не одобряет?", e))
    e.addEventListener("mouseenter", () => reversHover(false, "Сказочное заморское яство", e))
})

buy.forEach(e => {
    e.addEventListener("click", () => select(e.parentElement.parentElement))
})

function reversHover(leave, text, elements) {
    if (elements.parentElement.classList.contains("select")) {
        document.querySelector(`#${elements.parentElement.id} .name`).textContent = text;
        leave ? document.querySelector(`#${elements.parentElement.id} .name`).classList.add("leave") :
            document.querySelector(`#${elements.parentElement.id} .name`).classList.remove("leave");
            document.querySelector(`#${elements.parentElement.id}`).classList.toggle("hover");
    }
}

function select(elements) {
    if (elements.classList.contains("not-available")) {
        return
    }
    elements.classList.toggle("select");
    document.querySelector(`#${elements.id} .phrase.buy-product`).classList.toggle("hidden")
    document.querySelector(`#${elements.id} .phrase.choice`).classList.toggle("hidden")
}

