var btn = document.querySelector("#btnMudaLayout")

function mudaTexto(){
/* btn.textContent=btn.textContent==="Linhas"?"Colunas":"Linhas" */
/* esse código acima substitui todas as linhas abaixo dentro da função. É igual o if do excel */
    if(btn.textContent.trim()==="Linhas"){
        btn.textContent = "Blocos"
    } else {
        btn.textContent = "Linhas"
    }
}


function mudaLayout(){

    var layoutCartoes = document.querySelector(".mural")
    layoutCartoes.classList.toggle("mural--linha")
}

btn.addEventListener("click", function(){
    mudaTexto()
    mudaLayout()
}
)

btn.classList.remove("no-js")
