;(function(){
const btn = document.querySelectorAll(".opcoesDoCartao-remove") /* querySelectorAll retorna um array */

btn.forEach(function(){
    btn.addEventListener("click", function(
        const cartao = btn.parentNode.parentNode
        cartao.classList.add("cartao--some")
        cartao.addEventListener("transitionend", function(
            cartao.remove()
        ))
    ) )
})
})()