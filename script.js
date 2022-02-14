let data;
let enviandoNome;
let testinhoMarotinho;
validandoNome();
function validandoNome() {

    let  nomeUsuario = prompt("digite seu nickname");
    enviandoNome = {
        name: nomeUsuario
    }
    let sendName = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants ", enviandoNome)
    sendName.then(sucess)
    sendName.catch(fail)

    function sucess() {
        alert("Belo apelido");
    }

    function fail() {
        const nome = prompt("Digite outro nome pois este já está em uso");
        let nomeDado = {
            name: nome
        };
        const sendName = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", nomeDado);
        sendName.then(sucess);
        sendName.catch(fail);
    }
}

setInterval(timerConexao, 3000)

function timerConexao() {
    
    enviandoNome = {
    name: nomeUsuario
    }
    axios.post("https://mock-api.driven.com.br/api/v4/uol/participants ", enviandoNome)
}

const testRequest = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
testRequest.then(infoData);

function infoData(promisse) {
    data = promisse.data;
    addApiMessage();
}



// function addMyMessages() {
//     let input = document.querySelector("input");
//     let inputMessage = input.value;
//     const containerMessages = document.querySelector(".allMessages")
//     messageHtml = ` 
//     <div class="message"><span>de <b>${enviandoNome.name}</b>: ${inputMessage}</span>
//     </div>
//     `
//     containerMessages.innerHTML += messageHtml;
// }

function addApiMessage() {
    for (let i = 0; i < data.length; i++) {
        const add = document.querySelector(".allMessages")
        if (data[i].type === "status") {
            add.innerHTML += ` 
        <div class="message status" data-identifier="message"><span> (${data[i].time}) de <strong class=nomeForte>${data[i].from}</strong> para  <strong class=nomeForte>${data[i].to}</strong>: ${data[i].text} </span>
        </div>
        `
        }
        else if (data[i].type === "private_message") {
            add.innerHTML += ` 
       <div class="message private" data-identifier="message"><span> (${data[i].time}) de  <strong class=nomeForte>${data[i].from}</strong> para  <strong class=nomeForte>${data[i].to}</strong>: ${data[i].text} </span>
       </div>
       `
        }
        else {
            add.innerHTML += ` 
        <div class="message" data-identifier="message"><span> (${data[i].time})  de  <strong class=nomeForte>${data[i].from}</strong> para  <strong class=nomeForte>${data[i].to}</strong>: ${data[i].text} </span>
        </div>
        `
        }
    }
    window.scrollTo(0, document.body.scrollHeight);
}

function addMyMessages(){
    let input = document.querySelector("input");
   let inputMessage = input.value;
    if(inputMessage !== ""){

 let myObjectMessage = {
    from: input.value,
    to: to,
    text: inputMessage,
    type: type
}
}
const promessa = axios.post('https://mock-api.driven.com.br/api/v4/uol/messages', myObjectMessage);
promessa.then(xxx);
clearInput();

}
