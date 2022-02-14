let data;
let enviandoNome;
let testinhoMarotinho;

validandoNome();

function validandoNome() {

    let nomeUsuario = prompt("digite seu nickname");
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
// setInterval(timerConexao,3000)

//   timerConexao(){
    

//   }



const testRequest = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
testRequest.then(infoData);

function infoData(promisse) {
    data = promisse.data;
    console.log(data.from);
    addApiMessage();
}


let input = document.querySelector("input");
inputMessage = input.value;
function addMyMessages() {
    sendMyMessage();
    const containerMessages = document.querySelector(".allMessages")
    messageHtml = ` 
    <div class="message"><span>de <b>${enviandoNome.name}</b>: ${inputMessage}</span>
    </div>
    `
    containerMessages.innerHTML += messageHtml;
    inputMessage = "";

}
function sendMyMessage() {
    let input = document.querySelector("input");
    inputMessage = input.value;
}

function addApiMessage() {
    for (let i = 0; i < data.length; i++) {
        const add = document.querySelector(".allMessages")
        if (data[i].type === "status") {
            add.innerHTML += ` 
        <div class="message status"><span> <b>(${data[i].time}) ${data[i].from}</b> para ${data[i].to}: ${data[i].text} </span>
        </div>
        `
        }
        else if (data[i].type === "private_message") {
            add.innerHTML += ` 
       <div class="message private"><span> <b>(${data[i].time}) ${data[i].from}</b> para ${data[i].to}: ${data[i].text} </span>
       </div>
       `

        }
        else {
            add.innerHTML += ` 
        <div class="message"><span> <b>(${data[i].time}) ${data[i].from}</b> para ${data[i].to}: ${data[i].text} </span>
        </div>
        `
        }
    }
    window.scrollTo(0, document.body.scrollHeight);
}