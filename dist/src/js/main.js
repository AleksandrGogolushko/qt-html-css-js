"use strict";var covers=document.querySelectorAll(".cover"),buy=document.querySelectorAll(".buy");function reversHover(e,t,n){n.parentElement.classList.contains("select")&&(document.querySelector("#".concat(n.parentElement.id," .name")).textContent=t,e?document.querySelector("#".concat(n.parentElement.id," .name")).classList.add("leave"):document.querySelector("#".concat(n.parentElement.id," .name")).classList.remove("leave"))}function select(e){e.classList.contains("not-available")||(e.classList.toggle("select"),document.querySelector("#".concat(e.id," .phrase.buy-product")).classList.toggle("hidden"),document.querySelector("#".concat(e.id," .phrase.choice")).classList.toggle("hidden"))}covers.forEach((function(e){e.addEventListener("click",(function(){return select(e.parentElement)})),e.addEventListener("mouseleave",(function(){return reversHover(!0,"Котэ не одобряет?",e)})),e.addEventListener("mouseenter",(function(){return reversHover(!1,"Сказочное заморское яство",e)}))})),buy.forEach((function(e){e.addEventListener("click",(function(){return select(e.parentElement.parentElement)}))}));