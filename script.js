let nomeUsuario=prompt("digite seu nickname");
let enviandoNome = {
    name:nomeUsuario
}
let data;

console.log(enviandoNome);
const testRequest = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
testRequest.then(infoData);

function infoData(promisse){
  data= promisse.data
    console.log(data.length);
    spinMessage ();
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
function addApiMessage (){
    const add= document.querySelector(".allMessages")
    messageApiHtml= ` 
    <div class="message"><span> <b>(${data[i].time}) ${data[i].from}</b> para ${data[i].to}: ${data[i].text} </span>
    </div>
    `
    add.innerHTML+= messageApiHtml;

}
function spinMessage (){
    for(let i=0;i<data.length;i++){
        const add= document.querySelector(".allMessages")
        messageApiHtml= ` 
        <div class="message"><span> <b>(${data[i].time}) ${data[i].from}</b> para ${data[i].to}: ${data[i].text} </span>
        </div>
        `
        add.innerHTML+= messageApiHtml;
    
    }

}