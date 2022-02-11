let nomeUsuario=prompt("digite seu nickname");
let enviandoNome = {
    name:nomeUsuario
}
console.log(enviandoNome);


function addMessages (){
    const containerMessages= document.querySelector(".allMessages")
    messageHtml= ` 
    <div class="message">
    <img src="./img/logo 1.png">
    <img src="./img/logo 1.png">
</div>
`
containerMessages.innerHTML+= messageHtml;
}
console.log("oi");