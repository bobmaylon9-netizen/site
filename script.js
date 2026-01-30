function enviar(){

let nome = document.getElementById("nome").value
let empresa = document.getElementById("empresa").value
let servico = document.getElementById("servico").value
let data = document.getElementById("data").value

let msg = `Olá WebMais.
Quero um projeto.

Nome: ${nome}
Empresa: ${empresa}
Serviço: ${servico}
Data desejada: ${data}

Vim pelo site.`

let url = "https://wa.me/message/GFJ7SFMFDNSGG1?text=" + encodeURIComponent(msg)

window.open(url, "_blank")
}
