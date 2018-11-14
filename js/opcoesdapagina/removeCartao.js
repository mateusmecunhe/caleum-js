;(function(){
const btns = document.querySelectorAll(".opcoesDoCartao-remove") /* querySelectorAll retorna um array */


    for(let i = 0; i < btns.length; i++) /* for para que o a função funcione para o array inteiro */
    btns[i].addEventListener("click", function(){  /* captura o click de cada um dos elementos do array (os botoes) */
        const cartao = btns[i].parentNode.parentNode /* declaração da variável do cartão referente a cada botão */
        cartao.classList.add("cartao--some") /* a cada vez que o evento ocorrer (botão clicado), a variável cartão--some é adicionada ao cartão referente  */
        cartao.addEventListener("transitionend", function(){ /* sempre que a transição acabar, o cartão é removido */
            cartao.remove()
        })
    })
    
})()