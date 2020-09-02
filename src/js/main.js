let products = document.querySelectorAll(".product")
let covers = document.querySelectorAll(".cover")

products.forEach(e => {
    e.addEventListener("click", (el) => {
        if (e.classList.contains("not-available") || el.target.classList.contains("phrase")) {
            return
        }
        e.classList.toggle("select");
        document.querySelector(`#${e.id} .phrase.buy-product`).classList.toggle("hidden")
        document.querySelector(`#${e.id} .phrase.choice`).classList.toggle("hidden")
    })
})

covers.forEach(e => {
    e.addEventListener("mouseleave", () => {
        reversHover(true, "Котэ не одобряет?", e)
    })

    e.addEventListener("mouseenter", () => {
        reversHover(false, "Сказочное заморское яство", e)
    })
})

function reversHover(leave, text, elements) {
    if (elements.parentElement.classList.contains("select")) {
        document.querySelector(`#${elements.parentElement.id} .name`).textContent = text;
        leave ? document.querySelector(`#${elements.parentElement.id} .name`).classList.add("leave") :
                document.querySelector(`#${elements.parentElement.id} .name`).classList.remove("leave");
    }

}