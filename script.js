let nomeUsuario=prompt("digite seu nickname");
let enviandoNome = {
    name:nomeUsuario
}


console.log(enviandoNome);
const testRequest = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
testRequest.then(infoData);
let data;
function infoData(promisse){
  data= promisse.data
    console.log(data.length);
}


let input= document.querySelector("input");
inputMessage= input.value;
function addMyMessages (){
    sendMyMessage();
    const containerMessages= document.querySelector(".allMessages")
    messageHtml= ` 
    <div class="message"><span>de <b>${enviandoNome.name}</b>: ${inputMessage}</span>
    </div>
    `
    containerMessages.innerHTML+= messageHtml;
    // messageHtml.scrollIntoView();
inputMessage="";

}
function sendMyMessage(){
    let input= document.querySelector("input");
    inputMessage= input.value;
}