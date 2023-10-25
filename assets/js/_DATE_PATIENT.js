//import { nameTeste } from './index.js'

export function registerLog(){
    let inputNameComplete = document.querySelector("#inputNameComplete").value;
    let inputNameResp = document.querySelector("#inputNameResp").value;
    // PEGA INFORMAÇÃO DO BLOCO .conteudoRegistro.
    let conteudoRegistro = document.querySelector(".conteudoRegistro");
    // INSERE BLOCO DE HTML DENTRO DO BLOCO .conteudoRegistro.
    let btn = conteudoRegistro.innerHTML = `${conteudoRegistro.innerHTML} <div class="registroP">
    <p class="namePaciente"><strong>PACIENTE: ${inputNameComplete}</strong><br>RESPONSÁVEL: ${inputNameResp}</p> 
    <div class="incon-link">
        <div class="link-a">    
            <a id="a-link" href="./formCadastro.html" target="_blank" rel="noopener noreferrer">
                <img  src="/assets/img/informacoes.png" alt="img-perfil-paciente" class="incon">
            </a>
            <a id="a-link" href="./formCadastro.html" target="_blank" rel="noopener noreferrer">
                <img  src="/assets/img/informacoes.png" alt="img-perfil-paciente" class="incon">
            </a>
        </div>
    </div>`;
    //console.log(nameTeste)

    return btn;
 }
 //registerLog();
    

 export function getDataPessoa() {
    const dbref = ref(db);
    var id_user = '01'
    get(child(dbref, "pessoa/"+ id_user))
      .then((snapshot) => {
          if (snapshot.exists()){
            console.log("teste" + snapshot.val().crianca);
          }
          else {
            console.log('nao encontrado');
          }
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      //getDataPessoa();

function loadPage(){
    window.onload = () => {
        alert('teste')
    }
}


